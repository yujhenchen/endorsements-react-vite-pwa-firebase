import Endorsement from "./components/Endorsement";
import EndorsementContainer from "./components/EndorsementContainer";
import Form from "./components/Form";
import Header from "./components/Header";
import { EndorsementData } from "./types";

function App() {
  function onSubmitForm(): void {}

  function getEndorsements(): EndorsementData[] {
    return [];
  }

  const endorsements = getEndorsements().map((endorsement) => (
    <Endorsement {...endorsement} />
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
