// xmlHttpRequest

const url = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();

// step 1 : configure the request
xhr.open("GET", url, true);

// step 2 : what to do when the response arrives
xhr.onload = function () {
  // success
  if (xhr.status === 200) {
    // convert to json
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error(xhr.status);
  }
};
// step 3 : send the request
xhr.send();

// ---------------------------------------------------

// fetch

fetch(url) //Default method GET
  .then((response) => {
    //200
    //Readable
    return response.json();
  })
  .then((data) => {
    // convert to json
    console.log(data);
    // return data;
  })
  .catch((err) => console.error(err));

// --------------------------------------------------

// axios

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log("DATA:", res.data);
  })
  .catch((err) => {
    console.error(err);
  });

// -----------------------------------------------------------

//  async  & await

// async and await use to xmlHttpRequest or fetch  or axios
async function loadUserByAsyncAwait() {
  try {
    /* 
    fetch
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    */

    // axios
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
loadUserByAsyncAwait();

// -----------------------------------------------------------
