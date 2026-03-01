import { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState(null);
  //stateVariable  setStateFunction       initialValue
  return (
    <div className="container">
      <nav>
        <a href="#" className="logo">
          ReactJs
        </a>
        <div>
          <a href="#">Products</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
          <a href="#">{username ? username : "Guest"}</a>
        </div>
      </nav>
      <main>
        <h3>Welcome {username ? username : "Guest"}!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas et eveniet natus commodi non ratione accusantium mollitia. Illum accusamus dolores amet rem reprehenderit consequatur enim, adipisci magnam delectus ad!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta unde molestias autem quia reiciendis obcaecati nam aspernatur optio in minus illum laboriosam iste eaque, laborum quo minima? Quis eveniet, libero minus voluptates dolor commodi necessitatibus. Sequi earum quaerat
          molestiae similique delectus cumque, culpa non tempore nostrum sint quos tempora, eveniet laboriosam assumenda quibusdam, corrupti adipisci et doloribus dolorem. Autem minus doloribus placeat reiciendis iure facilis laboriosam pariatur et. Fugit non sint, error quae nobis, reprehenderit, a
          reiciendis voluptas illum asperiores iure accusantium! Non perferendis temporibus laborum exercitationem fugit rem tempora culpa harum ipsam vero expedita sunt numquam obcaecati pariatur eos animi cupiditate doloribus accusantium voluptatibus veniam, rerum ut illum magni natus. Id enim
          dignissimos debitis, et reiciendis eius, rem aliquam nisi labore facilis at totam illo veritatis sint optio harum! Necessitatibus, obcaecati odio cupiditate magnam libero consequatur impedit nemo nihil laborum maxime accusantium nobis est facere, eos, eius hic.
        </p>
        <h3>useState Hook</h3>
        <code>const [stateVariable, setStateFunction] = useState(initialValue);</code>

        <form>
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button>Submit</button>
        </form>
      </main>
      <footer>
        <p>
          Copyright &copy; 2025 designed by <a href="#">Tutor Joes</a>
        </p>
      </footer>
      
    </div>
  );
};

export default App;
