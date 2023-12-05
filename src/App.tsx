import { v4 as uuidv4 } from "uuid";
import Endorsement from "./components/Endorsement";
import EndorsementContainer from "./components/EndorsementContainer";
import Form from "./components/Form";
import Header from "./components/Header";
import { EndorsementData } from "./types";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [endorsementData, setEndorsementData] = useState<EndorsementData[]>([]);

  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL:
      "https://jen-playground-c6f0c-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  const endorsementsRef = ref(database, "endorsements/");

  useEffect(() => {
    return onValue(endorsementsRef, (snapshot) => {
      if (!snapshot.exists()) {
        console.log("Cannot find snapshot");
        return;
      }

      const dataArray: EndorsementData[] = [];

      snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;

        dataArray.push(item);
      });
      setEndorsementData(dataArray);
    });
  }, []);

  function writeEndorsementData(data: EndorsementData) {
    const { from, to, text, likedBy } = data;

    set(ref(database, `endorsements/${uuidv4()}`), {
      from: from,
      to: to,
      text: text,
      likedBy: likedBy,
    });
  }

  function onSubmitForm(data: EndorsementData): void {
    writeEndorsementData(data);
  }

  const endorsements = endorsementData.map((endorsement) => (
    <Endorsement
      {...{
        ...endorsement,
        likedBy: endorsement.likedBy ? endorsement.likedBy : [],
      }}
    />
  ));

  return (
    <main className="box-border my-0 bg-#1B1924 w-full min-h-screen text-white flex flex-col items-center font-sans">
      <Header />
      <Form onSubmitForm={onSubmitForm} />
      <EndorsementContainer>{endorsements}</EndorsementContainer>
    </main>
  );
}

export default App;
