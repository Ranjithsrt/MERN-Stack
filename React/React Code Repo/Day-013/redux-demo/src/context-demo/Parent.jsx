import Child from "./Child";

const Parent = () => {
  return (
    <div className="border w-80 p-3">
      <h3 className="font-semibold text-xl">Parent</h3>
      <Child />
    </div>
  );
};

export default Parent;
