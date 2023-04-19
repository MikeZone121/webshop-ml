import TopHeader from "./TopHeader";
import { useState } from "react";
import classNames from "classnames";
import { Cart, WishList } from "../../icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Header() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const cart = useSelector((state: RootState) => state.cartReducer);
  return (
    <>
      <TopHeader />
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white mb-4 md:mb-20">
        <nav className="flex items-center justify-between flex-wrap container mx-auto p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h2 className="font-semibold text-2xl tracking-tight text-black">
              <a href="/">GlamGarb</a>
            </h2>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setHamburgerToggle(!hamburgerToggle)}
              className="flex items-center px-3 py-2 border rounded text-black border-black"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={classNames({
              flex: hamburgerToggle,
              hidden: !hamburgerToggle,
              "flex flex-col w-full flex-grow md:flex-row lg:flex lg:items-center lg:w-auto":
                true,
            })}
          >
            <div className="text-sm lg:flex-grow text-left md:text-right">
              <ul className="flex md:items-center flex-col justify-start md:flex-row md:justify-center md:space-x-8">
                <li className="mt-4 md:mt-0">
                  <a href="/" className="header-items-large">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/shop" className="header-items-large">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="header-items-large">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-end mt-5 space-x-4 xl:space-x-8">
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
        </nav>
      </div>
    </>
  );
}

export default Header;
