const Page = async ({ params }) => {
  const DynamicValue = await params;
  console.log("Resolved params:", DynamicValue);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {DynamicValue.username}
      </h1>
    </div>
  );
};

export default Page;
