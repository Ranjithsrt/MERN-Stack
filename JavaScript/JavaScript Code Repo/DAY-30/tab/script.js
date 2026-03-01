const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
let currentTab = tabs[0];

function updateTab(selectTab) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  selectTab.classList.add("active");
  const index = Array.from(tabs).indexOf(selectTab);
  contents[index].classList.add("active");
}

updateTab(currentTab);

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    currentTab = tab;
    updateTab(currentTab);
  });
});

next.addEventListener("click", function () {
  if (currentTab.nextElementSibling) {
    currentTab = currentTab.nextElementSibling;
    updateTab(currentTab);
  }
});

prev.addEventListener("click", function () {
  if (currentTab.previousElementSibling) {
    currentTab = currentTab.previousElementSibling;
    updateTab(currentTab);
  }
});
