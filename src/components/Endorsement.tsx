import { database } from "../firebaseHelper";
import { getUserID } from "../helper";
import { EndorsementData } from "../types";
import { ref, set, get, child } from "firebase/database";

export default function Endorsement({
  id,
  from,
  to,
  text,
  likedBy,
}: EndorsementData) {
  function onLike(endorsementID: string): void {
    let hasLikedCard = false;
    get(child(ref(database), `endorsements/${endorsementID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const endorsement: EndorsementData = snapshot.val();
          console.log(endorsement);
          if (
            Array.isArray(endorsement.likedBy) &&
            endorsement.likedBy.includes(getUserID())
          )
            hasLikedCard = true;
          else hasLikedCard = false;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (!hasLikedCard) {
      set(ref(database, `endorsements/${endorsementID}`), {
        from: from,
        to: to,
        text: text,
        likedBy: Array.isArray(likedBy)
          ? [...likedBy, getUserID()]
          : [getUserID()],
      });
    }
  }

  return (
    <div className="box-border w-full px-4 py-2 text-14px bg-white text-#1B1924">
      <h3 className="font-bold">
        To <span>{to}</span>
      </h3>
      <p>{text}</p>
      <div className="flex place-content-between">
        <p className="font-bold">
          From <span>{from}</span>
        </p>

        <button
          className="flex space-x-2 items-center m-0 p-0 border-none bg-inherit"
          onClick={() => onLike(id)}
        >
          <i className="fa-solid fa-heart color-red fa-lg"></i>
          <span>{Array.isArray(likedBy) ? likedBy.length : 0}</span>
        </button>
      </div>
    </div>
  );
}
