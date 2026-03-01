import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const user = async () => {
  const userdata = await fetchData();
  console.log(userdata);
  return (
    <div>
      <h1 className="text-3xl font-bold m-15 text-center">User Data Page</h1>
      <div className="p-10 grid grid-cols-3">
        {userdata.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "20px",
              padding: "25px",
            }}
          >
            <h2 className="text-1xl uppercase font-bold text-red-500 my-3 tracking-wide">
              {user.title}
            </h2>
            <p className="text-xs text-gray-500">{user.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default user;
