// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Endorsement from "./components/Endorsement";
import EndorsementContainer from "./components/EndorsementContainer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="box-border my-0 bg-#1B1924 w-full min-h-screen text-white flex flex-col items-center font-sans">
      <Header />
      <Form />
      <EndorsementContainer>
        <Endorsement />
      </EndorsementContainer>
    </main>
  );
}

export default App;
