let users = [
  {
    id: 1,
    name: "Thanuj",
  },
];

export async function GET() {
  return new Response(JSON.stringify(users));
}

export async function POST(request) {
  const reqBody = await request.json();
  users.push({
    id: users.length + 1,
    name: reqBody.name,
  });
  return Response.json("user added successfully");
}

export async function DELETE(request) {
  const reqBody = await request.json();
  const findeuser = users.find((user) => user.id !== reqBody.id);
  if (!findeuser) {
    return Response.json("user not found");
  }
  return Response.json("user deleted successfully");
}

export async function PUT(request) {
  const reqBody = await request.json();
  const findeuser = users.find((user) => user.id === reqBody.id);
  if (!findeuser) {
    return Response.json("user not found");
  }
  findeuser.name = reqBody.name;
  return Response.json("user updated successfully");
}
