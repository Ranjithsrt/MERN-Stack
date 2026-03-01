import React from "react";

const Task_1 = () => {
  return (
    <>
      {/* HEADER */}

      <header
        className="container mx-auto 
       h-25
       flex justify-between items-center font-[Cinzel]
       font-bold cursor-pointer
       "
      >
        {/* LOGO */}

        <div className="flex items-center gap-2">
          <img src="src\assets\img\logo.svg" alt="" className="h-8 w-8" />
          <h1>Bloom & Bliss</h1>
        </div>

        {/* NAV */}

        <nav className="flex justify-baseline items-center ">
          <ul className="flex gap-4">
            <li>
              <a
                href="#"
                className="hover:text-[#b9b9b9] transition-colors duration-300 ease-in-out"
              >
                Fresh Picks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b9b9b9] 
               transition-colors duration-300 ease-in-out"
              >
                Bouquets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b9b9b9] 
               
               transition-colors duration-300 ease-in-out"
              >
                Plants
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b9b9b9]
               
               transition-colors duration-300 ease-in-out"
              >
                Occasions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#b9b9b9]  
               
               transition-colors duration-300 ease-in-out"
              >
                Workshops
              </a>
            </li>
          </ul>

          {/* ACCOUNT & CART  CONTAINER */}
          <div className="flex items-center gap-2 ml-10">
            <button className="bg-[#dddbdb] px-4 py-2 rounded cursor-pointer hover:bg-[#000000] hover:text-[white]">
              Account
            </button>
            <span className="bg-[#f7f7f7] w-13 h-13 px-4 py-2 rounded-full flex justify-center items-center cursor-pointer  ">
              <img src="src\assets\img\search.svg" alt="" />
            </span>
            <span className="bg-[#f7f7f7] w-13 h-13 px-4 py-2 rounded-full flex justify-center items-center cursor-pointer ">
              <img src="src\assets\img\bag.svg" alt="" />
            </span>
          </div>
        </nav>
      </header>

      {/* SEARCH BAR & FRESH PICKS CONTAINER   */}

      <section className="container mx-auto w-[60%] my-10">
        {/* SEARCH BAR */}

        <div className="flex items-center gap-2 w-[100%] bg-[#f7f7f7] px-3 ">
          <img src="src\assets\img\search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] px-4 py-2 rounded  text-[#b9b9b9] focus:outline-none
          placeholder:text-[#000000]
          placeholder:font-[Cinzel]
          cursor-pointer
          "
          />
        </div>

        {/*  xxxxxxx--------------xxxx----------------xxxxxxx */}

        <section className="bg-[#f7f7f7] p-[100px] my-[50px] cursor-pointer  shadow-lg">
          <div className="flex flex-col items-center my-[50px]">
            <h1 className="font-[Cinzel] font-bold text-8xl  ">😊</h1>
            <p className="font-[Cinzel] font-bold text-2xl mt-5">
              life has only 2 options
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 font-[Cinzel]">
            <button
              className=" bg-[#dddbdb] px-4 py-2 rounded 
            text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[white]  transition-colors duration-300 ease-in-out"
            >
              Uninstall
            </button>

            <button className="bg-[#1022ea] text-[white] px-4 py-2 rounded cursor-pointer hover:bg-[#000000] hover:text-[white] transition-colors duration-300 ease-in-out">
              Update
            </button>
          </div>
        </section>

        {/*  xxxxxxx--------------xxxx----------------xxxxxxx */}

        {/* FRESH PICKS CONTAINER */}

        <h1 className="mt-15 font-[Cinzel] font-bold text-2xl">Fresh Picks</h1>

        {/* FRESH PICKS CARDS CONTAINER */}

        <section className="flex flex-wrap gap-3">
          {/* CARD 1 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <figure className="w-[100%] my-8">
              <img
                src="src\assets\img\1.png"
                alt=""
                className="w-[100%]  transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 2 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\2.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Sunny Daisies</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$18.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 3 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\3.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Elegant Lilies</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$15.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 4 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\4.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">
                  Tropical Orchids
                </h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$25.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 5 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\5.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">
                  Vibrant Violets
                </h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$12.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 6 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\6.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">
                  Fragrant Lavender
                </h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$25.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 7 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\1.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$21.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 8 */}
          <div className="w-[23%] transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer">
            <figure className="w-[100%] my-8 ">
              <img src="src\assets\img\2.png" alt="" className="w-[100%] " />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$27.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 9 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 10 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 11 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 12 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 13 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 14*/}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 15 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
          {/* CARD 16 */}
          <div className="w-[23%]">
            <figure className="w-[100%] my-8 ">
              <img
                src="https://placehold.co/600x600"
                alt=""
                className="w-[100%] "
              />
              <figcaption>
                <h2 className="font-[Cinzel] font-bold my-3">Radiant Roses</h2>
                <p className="font-[Cinzel] font-bold text-[#b9b9b9]">$19.99</p>
              </figcaption>
            </figure>
          </div>
        </section>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f7f7f7] py-8 font-[Cinzel] mt-[50px] ">
        <div className="w-[80%] mx-auto flex items-center justify-between text-[#b9b9b9] my-5">
          <h2 className="font-bold text-[#333]">
            <a href="#">About Us</a>
          </h2>
          <h2 className="font-bold text-[#333]">
            <a href="#">Contact Us</a>
          </h2>
          <h2 className="font-bold text-[#333]">
            <a href="#">FAQ</a>
          </h2>
          <h2 className="font-bold text-[#333]">
            <a href="#">Privacy Policy</a>
          </h2>
          <h2 className="font-bold text-[#333]">
            <a href="#">Terms & Conditions</a>
          </h2>
        </div>
        <div className="w-[80%] mx-auto flex items-center justify-center gap-5 mt-[50px]">
          <h1 className="font-[Cinzel] font-bold text-[#777373]">
            Copyright &copy; 2023
          </h1>
          <h1 className="font-[Cinzel] font-bold text-[#7c7979]">
            All rights reserved
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Task_1;
