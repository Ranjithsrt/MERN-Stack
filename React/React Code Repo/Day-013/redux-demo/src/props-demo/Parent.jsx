import Child from "./Child";

const Parent = ({ user }) => {
  return (
    <div className="border w-80 p-3">
      <h3 className="font-semibold text-xl">Parent</h3>
      <Child user={user} />
    </div>
  );
};

export default Parent;
