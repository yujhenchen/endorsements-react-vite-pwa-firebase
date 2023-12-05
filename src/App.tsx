import { v4 as uuidv4 } from "uuid";
import Endorsement from "./components/Endorsement";
import EndorsementContainer from "./components/EndorsementContainer";
import Form from "./components/Form";
import Header from "./components/Header";
import { EndorsementData } from "./types";
import { ref, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { getUserID, setUserID } from "./helper";
import { database } from "./firebaseHelper";

function App() {
  const [endorsementData, setEndorsementData] = useState<EndorsementData[]>([]);

  const endorsementsRef = ref(database, "endorsements/");

  useEffect(() => {
    return onValue(endorsementsRef, (snapshot) => {
      if (!snapshot.exists()) {
        return;
      }

      const dataArray: EndorsementData[] = [];

      snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;

        dataArray.push({ ...item, id: item.key });
      });
      setEndorsementData(dataArray);
    });
  }, []);

  useEffect(() => {
    if (!getUserID()) setUserID(uuidv4());
  }, []);

  function writeEndorsementData(data: EndorsementData) {
    const { id, from, to, text, likedBy } = data;

    set(ref(database, `endorsements/${id}`), {
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
