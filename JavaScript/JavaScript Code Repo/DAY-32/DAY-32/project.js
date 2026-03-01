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
});
