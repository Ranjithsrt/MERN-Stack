$(document).ready(function () {
  // load random meals
  fetchRandomMeals();

  // load meal details on modal
  $(document).on("click", ".meal", function () {
    let mealId = $(this).data("id");
    // console.log(mealId);
    loadMealOnModalById(mealId);
  });

  // modal close on close button
  $(".close-btn").on("click", function () {
    $("#meal-model").fadeOut();
  });

  // modal close on window click
  $(window).on("click", function (e) {
    if (e.target.id === "meal-model") {
      $("#meal-model").fadeOut();
    }
  });

  // search meals
  $("#search-btn").on("click", function () {
    let query = $("#search").val();
    // console.log(mealName);
    if (query != "") {
      searchMeal(query);
    } else {
      fetchRandomMeals();
    }
  });
});

function searchMeal(query) {
  $("#meal-list").html("<h2 id='loading-text'>Searching Meals...</h2>");
  $.ajax({
    url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    method: "GET",
    success: function (data) {
      // console.log(data.meals);
      if (data.meals === null) {
        $("#meal-list").html("<h2>No Meals Found</h2>");
      } else {
        $("#loading-text").remove();
        data.meals.forEach((meal) => {
          foodCard(meal);
        });
      }
    },
  });
}

 




function loadMealOnModalById(Id) {
  $.ajax({
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Id}`,
    method: "GET",
    success: function (data) {
      // console.log(data.meals[0]);
      let meal = data.meals[0];
      $("#meal-details h2").text(meal.strMeal);
      $("#meal-details img").attr("src", meal.strMealThumb);
      $("#meal-details p").text(meal.strInstructions);
      $("#meal-details a").attr("href", meal.strYoutube);
      $("#meal-model").fadeIn();
    },
  });
}

function fetchRandomMeals() {
  $("#meal-list").html("<h2 id='loading-text'>Loading Meals...</h2>");

  let mealsLoaded = 0;

  for (let i = 0; i < 15; i++) {
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "GET",
      success: function (data) {
        // console.log(data.meals[0]);
        foodCard(data.meals[0]);
        mealsLoaded++;
        if (mealsLoaded === 15) {
          $("#loading-text").remove();
        }
      },
    });
  }
}

function foodCard(data) {
  $("#meal-list").append(`
    <div class="meal" data-id="${data.idMeal}">
      <img src="${data.strMealThumb}" class="card-img-top" alt="${data.strMeal}">
      <div class="card-body">
        <h5 title="${data.strMeal}">${data.strMeal}</h5>
        <p class="card-text">${data.strInstructions}</p>
      </div>
    </div>
    `);
}
