export default function Form() {
  return (
    <form>
      <textarea
        id="content"
        className="box-border bg-#444059 text-#8F8F8F w-full m-0 p-0 rounded-8px h-118px invalid:tborder invalid:border-red"
        placeholder="Write your endorsements here!"
        minLength={1}
        maxLength={77}
        required
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
        />
        <input
          id="to"
          className="bg-#444059 text-#8F8F8F m-0 rounded-8px h-40px w-full invalid:border invalid:border-red"
          placeholder="To"
          type="text"
          minLength={1}
          maxLength={10}
          required
        />
      </div>

      <button className="box-border bg-#28A9F1 text-#04131C text-22px rounded-8px h-60px p-4 w-full font-sans">
        Publish
      </button>
    </form>
  );
}
