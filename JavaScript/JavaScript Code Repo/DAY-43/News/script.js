const API_KEY = "8a30b57dbc014d75ad73244dfbcf5ef5";
const BASE_URL = "https://newsapi.org/v2/";
let activeCategory = "all";
const COUNTRY = "us";
// ------------------- Category Button ---------------
const CATEGORIES = ["general", "technology", "sports", "business", "entertainment", "science"];
const categoriesNav = document.querySelector(".categories");
function renderCategories() {
  categoriesNav.innerHTML = "";
  const frag = document.createDocumentFragment();
  const allBtn = document.createElement("button");
  allBtn.className = "cat-btn active";
  allBtn.textContent = "All";
  allBtn.dataset.cat = "All";
  frag.appendChild(allBtn);
  for (category of CATEGORIES) {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.textContent = category[0].toUpperCase() + category.slice(1);
    //data-cat="all"
    btn.dataset.cat = category;
    frag.appendChild(btn);
  }
  categoriesNav.appendChild(frag);
  categoriesNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("cat-btn")) {
      const btn = e.target;
      const cat = btn.dataset.cat;

      document.querySelectorAll(".cat-btn").forEach((b) => {
        b.classList.remove("active");
        btn.classList.add("active");
        activeCategory = cat;
        applyFilters();
      });
    }
  });
}

// ------------------- Fetch News ---------------

async function fetchNews(category = "general", query = "") {
  let url = `${BASE_URL}top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;
  if (query) {
    url = `${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`;
  }

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
const grid = document.getElementById("grid");
function displayNews(articles) {
  grid.innerHTML = "";
  if (!articles || articles.length === 0) {
    grid.innerHTML = "<div class='empty'>No Articles to display</div>";
  }
  console.log(articles);

  const frag = document.createDocumentFragment();
  articles.forEach((article) => {
    //Article Tag for card
    const card = document.createElement("article");
    card.className = "card";

    //Article Image
    const img = document.createElement("img");
    img.alt = article.title || "Article Image";
    img.className = "thumb";
    img.src = article.urlToImage || "https://placehold.co/600x400?text=No+Image";
    img.loading = "lazy";
    card.appendChild(img);

    //Article Body
    const body = document.createElement("div");
    body.className = "card-body";

    //Aricle Title
    const title = document.createElement("div");
    title.className = "Title";
    title.textContent = article.title || "Untitled";
    body.appendChild(title);

    //Article Description
    const description = document.createElement("div");
    description.className = "desc";
    description.textContent = article.description || "";
    body.appendChild(description);

    //Article Meta Data
    const meta = document.createElement("div");
    meta.className = "meta";

    const src = document.createElement("div");
    src.className = "source";
    src.textContent = article.source?.name || "UnKnown";

    const date = document.createElement("div");
    date.className = date;
    date.textContent = fmtDate(article.publishedAt);

    meta.appendChild(src);
    meta.appendChild(date);
    body.append(meta);

    card.appendChild(body);

    card.addEventListener("click", () => {
      openModal(article);
    });
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}
// ------------------- Open Modal ---------------

const modalBackdrop = document.getElementById("modalBackdrop");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const modalUrl = document.getElementById("modalUrl");

function openModal(data) {
  modalImage.src = data.urlToImage;
  modalTitle.textContent = data.title || "No Title";
  modalMeta.textContent = `${data.source?.name} • ${fmtDate(data.publishedAt)}` || " ";
  modalDescription.textContent = data.description || "";
  modalContent.innerHTML = data.content || "";
  modalUrl.href = data.url || "#";

  modalBackdrop.classList.add("show");
}

modalClose.addEventListener("click", function () {
  modalBackdrop.classList.remove("show");
});
//-------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  fetchNews();
  renderCategories();
});

function fmtDate(iso) {
  if (!iso) {
    return "";
  }
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch (error) {
    return iso;
  }
}

function applyFilters() {
  let category = activeCategory == "All" ? "general" : activeCategory;
  fetchNews(category);
}

//Search Text
const search = document.getElementById("search");
search.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  let category = activeCategory == "All" ? "general" : activeCategory;
  fetchNews(category, query);
});
