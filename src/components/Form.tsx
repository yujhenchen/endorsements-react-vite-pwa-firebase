import { useState } from "react";
import { EndorsementData } from "../types";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onSubmitForm: (endorsementData: EndorsementData) => void;
};

export default function Form({ onSubmitForm }: Props) {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [text, setText] = useState<string>("");

  function onChangeFrom(value: string): void {
    setFrom(value);
  }

  function onChangeTo(value: string): void {
    setTo(value);
  }

  function onChangeText(value: string): void {
    setText(value);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({
          id: uuidv4(),
          from: from,
          to: to,
          text: text,
          likedBy: false,
        });
      }}
    >
      <textarea
        id="content"
        className="box-border bg-#444059 text-#8F8F8F w-full m-0 p-0 rounded-8px h-118px invalid:tborder invalid:border-red"
        placeholder="Write your endorsements here!"
        minLength={1}
        maxLength={77}
        required
        value={text}
        onChange={(event) => {
          onChangeText(event.target.value);
        }}
      ></textarea>
      <div className="box-border flex w-full py-2">
        <input
          id="from"
          className="bg-#444059 text-#8F8F8F m-0 rounded-8px h-40px w-full invalid:border invalid:border-red"
          placeholder="From"
          type="text"
          minLength={1}
          maxLength={10}
          required
          value={from}
          onChange={(event) => {
            onChangeFrom(event.target.value);
          }}
        />
        <input
          id="to"
          className="bg-#444059 text-#8F8F8F m-0 rounded-8px h-40px w-full invalid:border invalid:border-red"
          placeholder="To"
          type="text"
          minLength={1}
          maxLength={10}
          required
          value={to}
          onChange={(event) => {
            onChangeTo(event.target.value);
          }}
        />
      </div>

      <button className="box-border bg-#28A9F1 text-#04131C text-22px rounded-8px h-60px p-4 w-full font-sans">
        Publish
      </button>
    </form>
  );
}
