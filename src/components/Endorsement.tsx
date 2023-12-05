import { EndorsementData } from "../types";

export default function Endorsement({
  from,
  to,
  text,
  likedBy,
}: EndorsementData) {
  return (
    <div
      id="endorsement-card"
      className="box-border w-full px-4 py-2 text-14px bg-white text-#1B1924"
    >
      <h3 className="font-bold">
        To <span>{to}</span>
      </h3>
      <p>{text}</p>
      <div className="flex place-content-between">
        <p className="font-bold">
          From <span>{from}</span>
        </p>

        <div className="flex space-x-2 items-center">
          <i className="fa-solid fa-heart color-red fa-lg"></i>
          <span>{likedBy.length}</span>
        </div>
      </div>
    </div>
  );
}
