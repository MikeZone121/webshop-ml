import { useEffect, useState } from "react";
import {
  Search,
  WishList,
  Cart,
  Hamburger,
  Close,
  ArrowRight,
} from ".././icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import jwt_decode from "jwt-decode";
import { GoogleCallbackResponse, User } from "./types";

function Header() {
  const [toggleSearch, setToggleSearch] = useState(true);
  const [mdHamburgerToggle, setMdHamburgerToggle] = useState(true);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  const [user, setUser] = useState<User | undefined>();

  function handleCallbackResponse(response: GoogleCallbackResponse) {
    let userObject = jwt_decode<User>(response.credential);
    setUser(userObject);

    document.getElementById("signInDiv")!.hidden = true;
  }

  function handleSignOut() {
    setUser(undefined);
    document.getElementById("signInDiv")!.hidden = false;
  }

  useEffect(() => {
    /* Global Google */
    window.google?.accounts.id.initialize({
      client_id:
        "723430193377-e4gt7h1qi35qvnk7936dmi6mhnvvjqmm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById("signInDiv")!,
      {
        theme: "outline",
        size: "medium",
      }
    );

    window.google?.accounts.id.prompt();
  }, []);

  return (
    <div className="dark:bg-gray-900 m-auto">
      <div className="bg-graydark">
        <div className="container text-white py-1 px-6 flex justify-between items-center">
          <p>Trust</p>
          <div id="signInDiv"></div>
          {user && (
            <>
              <button onClick={() => handleSignOut()}> Sign Out</button>
              <div className="flex flex-row items-center">
                <img
                  width="20px"
                  height="20px"
                  className="rounded-sm mr-2"
                  src={user.picture}
                  alt={user.name}
                />
                <p>{user.name}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdHamburgerToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <Search width="1em" height="1em" className="svg text-2xl" />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="space-x-6 flex flex-row items-center">
              <a href="/wishlist">
                <button aria-label="view favourites">
                  <WishList
                    width="1em"
                    height="1em"
                    className="svg text-2xl fill-stroke hover:text-red-500 hover:fill-current transition ease-in-out"
                  />
                </button>
              </a>
              <a href="/cart">
                <button aria-label="go to cart">
                  {cart.cartTotalQuantity ?? 0}
                  <Cart width="1em" height="1em" className="svg text-2xl" />
                </button>
              </a>
            </div>
          </div>
          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 mb-12 shadow-sm">
            <div className="container mx-auto flex items-center justify-between p-6">
              <a href="/">
                <h1
                  className="md:w-2/12 cursor-pointer text-gray-800 text-3xl dark:text-white"
                  aria-label="GlamGarb"
                >
                  GlamGarb
                </h1>
              </a>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <a
                    href="/"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setToggleSearch(!toggleSearch)}
                    aria-label="search items"
                  >
                    <Search className="svg text-2xl" />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      toggleSearch ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <a href="/wishlist">
                    <button aria-label="view favourites">
                      <WishList
                        width="1em"
                        height="1em"
                        className="svg text-2xl fill-stroke hover:text-red-500 hover:fill-current transition ease-in-out"
                      />
                    </button>
                  </a>
                  <a href="/cart">
                    <button aria-label="go to cart">
                      {cart.cartTotalQuantity ?? 0}
                      <Cart width="1em" height="1em" className="svg text-2xl" />
                    </button>
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdHamburgerToggle(!mdHamburgerToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <Hamburger
                      width="1em"
                      height="1em"
                      className="svg text-2xl"
                    />
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setToggleHamburger(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <Hamburger
                      width="1em"
                      height="1em"
                      className="svg text-2xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              toggleHamburger ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                <div>
                  <Search width="1em" height="1em" className="svg text-2xl" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setToggleHamburger(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <Close width="1em" height="1em" className="svg text-2xl" />
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <ArrowRight
                        width="1em"
                        height="1em"
                        className="svg text-2xl"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Furniture
                    <div>
                      <ArrowRight
                        width="1em"
                        height="1em"
                        className="svg text-2xl"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Lookbook
                    <div>
                      <ArrowRight
                        width="1em"
                        height="1em"
                        className="svg text-2xl"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Support
                    <div>
                      <ArrowRight
                        width="1em"
                        height="1em"
                        className="svg text-2xl"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <a
                    href="#"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <Cart width="1em" height="1em" className="svg text-2xl" />
                    </div>
                    <p className="text-base">Cart</p>
                    <p className="text-base">{cart.cartTotalQuantity ?? 0}</p>
                  </a>
                </li>
                <li>
                  <a
                    href="/wishlist"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <WishList
                        width="1em"
                        height="1em"
                        className="svg text-2xl fill-stroke hover:text-red-500 hover:fill-current transition ease-in-out"
                      />
                    </div>
                    <p className="text-base">Wishlist</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
