export default function Endorsement() {
  return (
    <div
      id="endorsement-card"
      className="box-border w-full px-4 py-2 text-14px bg-white text-#1B1924"
    >
      <h3 className="font-bold">
        To <span>Me</span>
      </h3>
      <p>You have done a great job!</p>
      <div className="flex place-content-between">
        <p className="font-bold">
          From <span>Me</span>
        </p>

        <div className="flex space-x-2 items-center">
          <i className="fa-solid fa-heart color-red fa-lg"></i>
          <span>16</span>
        </div>
      </div>
    </div>
  );
}
