const KeywordsList = [
  {
    search: "How to learn web development",
    url: "https://tutorjoes.in",
  },
  {
    search: "JavaScript frameworks",
    url: "https://www.tutorjoes.in/JS_tutorial/index",
  },
  {
    search: "CSS tips and tricks",
  },
  {
    search: "Front-end vs. Back-end development",
  },
  {
    search: "Responsive web design",
    url: "https://tutorjoes.in",
  },
  {
    search: "How to use Git for web development",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web development bootcamps",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web accessibility guidelines",
    url: "https://tutorjoes.in",
  },
  {
    search: "Progressive Web Apps",
    url: "https://tutorjoes.in",
  },
  {
    search: "UI/UX design for the web",
    url: "https://tutorjoes.in",
  },
  {
    search: "React.js tutorial",
    url: "https://tutorjoes.in",
  },
  {
    search: "Node.js frameworks",
    url: "https://tutorjoes.in",
  },
  {
    search: "PHP best practices",
    url: "https://tutorjoes.in",
  },
  {
    search: "SEO for websites",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web performance optimization",
    url: "https://tutorjoes.in",
  },
  {
    search: "GraphQL API design",
    url: "https://tutorjoes.in",
  },
  {
    search: "WordPress theme development",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web security best practices",
    url: "https://tutorjoes.in",
  },
  {
    search: "jQuery plugins",
    url: "https://tutorjoes.in",
  },
  {
    search: "CSS grid layouts",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web animations with CSS and JavaScript",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web scraping with Python",
    url: "https://tutorjoes.in",
  },
  {
    search: "WebRTC video chat implementation",
    url: "https://tutorjoes.in",
  },
  {
    search: "Responsive images",
    url: "https://tutorjoes.in",
  },
  {
    search: "Debugging web applications",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web development trends in 2023",
    url: "https://tutorjoes.in",
  },
  {
    search: "Bootstrap responsive design",
    url: "https://tutorjoes.in",
  },
  {
    search: "Python web development frameworks",
    url: "https://tutorjoes.in",
  },
  {
    search: "RESTful API design",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web accessibility testing",
    url: "https://tutorjoes.in",
  },
  {
    search: "JavaScript design patterns",
    url: "https://tutorjoes.in",
  },
  {
    search: "React Native app development",
    url: "https://tutorjoes.in",
  },
  {
    search: "CSS preprocessors",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web performance metrics",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web development tools for Mac",
    url: "https://tutorjoes.in",
  },
  {
    search: "WordPress plugin development",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web design trends in 2023",
    url: "https://tutorjoes.in",
  },
  {
    search: "Database design for web applications",
    url: "https://tutorjoes.in",
  },
  {
    search: "User authentication and authorization",
    url: "https://tutorjoes.in",
  },
  {
    search: "JavaScript testing frameworks",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web hosting providers",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web development for mobile devices",
    url: "https://tutorjoes.in",
  },
  {
    search: "React Native vs Flutter",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web scraping tools",
    url: "https://tutorjoes.in",
  },
  {
    search: "Ruby on Rails tutorial",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web design principles",
    url: "https://tutorjoes.in",
  },
  {
    search: "JavaScript data visualization",
    url: "https://tutorjoes.in",
  },
  {
    search: "Vue.js components",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web typography best practices",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web application architecture",
    url: "https://tutorjoes.in",
  },
  {
    search: "React Native app performance",
    url: "https://tutorjoes.in",
  },
  {
    search: "CSS flexbox layouts",
    url: "https://tutorjoes.in",
  },
  {
    search: "ASP.NET web development",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web accessibility audit",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web animations using SVG",
    url: "https://tutorjoes.in",
  },
  {
    search: "Web development podcasts",
    url: "https://tutorjoes.in",
  },
  {
    search: "Responsive web design frameworks",
    url: "https://tutorjoes.in",
  },
  {
    search: "JavaScript unit testing",
    url: "https://tutorjoes.in",
  },
];

const suggestBox = document.querySelector(".suggest-box");
const inputBox = document.querySelector("#searchText");

inputBox.addEventListener("keyup", filterSuggesstions);

function filterSuggesstions() {
  let suggesstions = [];
  let input = this.value.trim().toLowerCase();
  if (input.length) {
    suggesstions = KeywordsList.filter((keyword) => {
      return keyword.search.toLowerCase().includes(input);
    });
  }
  console.log(suggesstions);
  display(suggesstions);
  if (!suggesstions.length) {
    suggestBox.innerHTML = ``;
  }
}

function display(suggesstions) {
  const listItems = suggesstions.map(
    (item) => `<li>
  <a href='${item.url}' target='_blank'>${item.search}</a>
  </li>`
  );
  suggestBox.innerHTML = `<ul>${listItems}</ul>`;
}
