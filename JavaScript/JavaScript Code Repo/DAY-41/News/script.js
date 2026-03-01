const API_KEY = "8a30b57dbc014d75ad73244dfbcf5ef5";
const BASE_URL = "https://newsapi.org/v2/top-headlines";
let currentCategory = "general";
const COUNTRY = "us";

const CATEGORIES = ["all", "general", "technology", "sports", "business", "entertainment", "science"];

const categoriesNav = document.querySelector(".categories");

function renderCategories() {
  categoriesNav.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (category of CATEGORIES) {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.textContent = category[0].toUpperCase() + category.slice(1);
    //data-cat="all"
    btn.dataset.cat = category;
    frag.appendChild(btn);
  }
  categoriesNav.appendChild(frag);
}

// ------------------- Fetch News ---------------

async function fetchNews(category = "general", query = "") {
  let url = `${BASE_URL}?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "error") {
      throw new Error(data.message || "Failed to fetch");
    }

    displayNews(data.articles);
  } catch (error) {
    console.error(error);
  }
}
// ------------------- Display Articles----------
function displayNews(articles) {
  console.log(articles);
}
// ------------------- Open Modal ---------------

document.addEventListener("DOMContentLoaded", () => {
  fetchNews();
  renderCategories();
});

/*

<nav class="categories">
    <button class="cat-btn" data-cat="all">All</button>
    <button class="cat-btn" data-cat="general">General</button>
    <button class="cat-btn active" data-cat="technology">Technology</button>
    <button class="cat-btn" data-cat="sports">Sports</button>
    <button class="cat-btn" data-cat="business">Business</button>
    <button class="cat-btn" data-cat="entertainment">Entertainment</button>
    <button class="cat-btn" data-cat="science">Science</button>
</nav>

*/
