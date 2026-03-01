import GrandChild from "./GrandChild";

const Child = ({ user }) => {
  return (
    <div className="border  w-full p-3">
      <h3 className="font-semibold text-xl">Child</h3>
      <GrandChild user={user} />
    </div>
  );
};

export default Child;
