const foodItems = [
  {
    item: "Exotic Veggie Bulgogi Ramen",
    price: 299,
    cuisine: "Asian",
    image: "21.jpeg",
  },
  {
    item: "Dan Dan Chicken Bulgogi Ramen",
    price: 299,
    cuisine: "Asian",
    image: "22.jpeg",
  },
  {
    item: "Chicken Katsu Gochujang Ramen",
    price: 299,
    cuisine: "Asian",
    image: "23.jpeg",
  },
  {
    item: "Crispy Paneer Gochujang Ramen",
    price: 299,
    cuisine: "Asian",
    image: "24.jpeg",
  },
  {
    item: "Crispy Hot Peri Peri Chicken Superbowl",
    price: 339,
    cuisine: "Asian",
    image: "25.jpeg",
  },
  {
    item: "Ultimate Burrito Superbowl",
    price: 339,
    cuisine: "Continental",
    image: "26.jpeg",
  },
  {
    item: "Stir Fried Chilli Paneer Superbowl",
    price: 339,
    cuisine: "Pan-Asian",
    image: "27.jpeg",
  },
  {
    item: "Mexican Burrito Superbowl",
    price: 339,
    cuisine: "Continental",
    image: "28.jpeg",
  },
  {
    item: "Grilled BBQ Chicken Superbowl",
    price: 339,
    cuisine: "Mexican",
    image: "29.jpeg",
  },
  {
    item: "Smoke that Superbowl",
    price: 339,
    cuisine: "Pan-Asian",
    image: "30.jpeg",
  },
  {
    item: "Chicken Maryland Superbowl",
    price: 339,
    cuisine: "Mexican",
    image: "31.jpeg",
  },
  {
    item: "Teriyaki Chicken Superbowl",
    price: 339,
    cuisine: "Continental",
    image: "32.jpeg",
  },
  {
    item: "Soboro Don Superbowl",
    price: 339,
    cuisine: "Pan-Asian",
    image: "33.jpeg",
  },
  {
    item: "Chicken Cafe De Paris Superbowl",
    price: 339,
    cuisine: "Continental",
    image: "34.jpeg",
  },
  {
    item: "Rooster Chicken Superbowl",
    price: 339,
    cuisine: "Pan-Asian",
    image: "35.jpeg",
  },
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const imgCaption = document.querySelector(".img-caption");
const closeModal = document.getElementById("closeModal");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImageIndex = 0;

foodItems.forEach((food, index) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";
  galleryItem.innerHTML = `
    <span class='cuisine'>${food.cuisine}</span>
    <img src='images/${food.image}' alt='${food.item}'>
    <div class='caption'>
      <span>${food.item}</span> 
      <span>Rs.${food.price}</span>
    </div>
  `;
  gallery.appendChild(galleryItem);

  galleryItem.addEventListener("click", function () {
    currentImageIndex = index;
    modal.style.display = "flex";
    updateModalImage();
  });
});

function updateModalImage() {
  const food = foodItems[currentImageIndex];
  modalImage.src = `images/${food.image}`;
  modalImage.alt = food.item;
  imgCaption.querySelector("h3").textContent = currentImageIndex + 1 + ". " + food.item;
  imgCaption.querySelector("p").textContent = "Rs." + food.price;
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + foodItems.length) % foodItems.length;
  updateModalImage();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % foodItems.length;
  updateModalImage();
});
