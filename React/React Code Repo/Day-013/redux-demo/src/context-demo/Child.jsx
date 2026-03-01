import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div className="border  w-full p-3">
      <h3 className="font-semibold text-xl">Child</h3>
      <GrandChild />
    </div>
  );
};

export default Child;
