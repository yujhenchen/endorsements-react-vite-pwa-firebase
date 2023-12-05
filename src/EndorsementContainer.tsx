type Props = {
  children: React.ReactNode;
};

export default function EndorsementContainer({ children }: Props) {
  return (
    <section className="box-border w-317px p-4">
      <h2 className="box-border m-0 text-20px w-full py-2 align-middle text-center">
        <span>-</span> Endorsements <span>-</span>
      </h2>

      <div id="endorsements-container" className="flex flex-col space-y-4">
        {children}
      </div>
    </section>
  );
}
