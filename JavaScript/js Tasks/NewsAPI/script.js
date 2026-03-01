const All = document.querySelector("#All");
const Technology = document.querySelector("#Technology");
const Business = document.querySelector("#Business");
const General = document.querySelector("#General");
const Entertainment = document.querySelector("#Entertainment");
const Health = document.querySelector("#Health");
const Science = document.querySelector("#Science");
const Sports = document.querySelector("#Sports");
const Search = document.querySelector("#searchInput");
const newsContainer = document.getElementById("newsContainer");

const API_KEY = "ab810cfea28d497fa9415ee223a9f2d8";
let currentURL = "";

// Function to clear the news container
function clearNewsContainer() {
  if (newsContainer) {
    newsContainer.innerHTML = "";
  }
}

// Function to display news articles
async function displayNews(url) {
  clearNewsContainer();
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    data.articles.forEach((article, index) => {
      const newsCard = document.createElement("div");
      newsCard.classList.add("newsCard");
      newsCard.id = "newsCard";
      newsCard.id = `newsCard-${index}`; // Unique ID for each card
      newsCard.innerHTML = `
                <h2>${article.title || "No title available"}</h2>
                <p>${article.description || "No description available"}</p>
                <img src="${
                  article.urlToImage || "placeholder-image-url.jpg"
                }" alt="${
        article.title || "News image"
      }" onerror="this.src='placeholder-image-url.jpg'">
                <a href="${article.url}" target="_blank">Read More</a>
            `;
      newsContainer.appendChild(newsCard);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML =
      '<div class="error">Error loading news. Please try again later.</div>';
  }
}

// search function

Search.addEventListener("input", function (e) {
  if (e.target.value.trim()) {
    currentURL = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      e.target.value
    )}&apiKey=${API_KEY}`;
    displayNews(currentURL);
  }
});

All.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

Technology.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

//  NewsAPI();

Business.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

General.addEventListener("click", function () {
  const today = new Date().toISOString().split("T")[0];
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

Entertainment.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

Health.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

Science.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

Sports.addEventListener("click", function () {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`;
  displayNews(currentURL);
});

// Load general news by default when the page loads
window.addEventListener("load", () => {
  currentURL = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;
  displayNews(currentURL);
});
