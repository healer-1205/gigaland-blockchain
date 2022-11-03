import React from "react"
import { Link } from "react-router-dom"
// import axios from "axios";
import "./main-dist.css"

function Header() {
  // let [chain, setChain] = React.useState([]);

  function open() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const [isOpen, setIsOpen] = React.useState(false)

  // function open1() {
  //   // let click = document.querySelectorAll("#mainmenu > li > span");
  //   // let menu = document.querySelectorAll("#mainmenu > li > span > ul");
  //   // for (let i = 0; i < click.length; i++) {
  //   //   menu[i].style.height = "188px";
  //   //   click[i].classList.add("active");
  //   //   console.log("open");
  //   // }
  // }

  return (
    <>
      <header className="fixed z-50 w-full bg-black text-white dark:bg-stone-900 dark:text-white">
        <div className="text-md mx-auto fuckingheader  h-16 flex-row items-center justify-between gap-2  px-2  ">
          {/* <div className="md:-mr-36 md:hidden 2xl:-mr-12"></div>
          <div className="grow md:hidden"></div> */}
          <div className="-ml-8 flex-shrink-0 md:ml-0 logoo">
            <a href="/">
              <div>
                <div className="flex flex-row items-center text-2xl font-semibold">
                  <img
                    src="../../images/logo-5.png"
                    alt=""
                    style={{ margin: "0 10px" }}
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="grow"></div>
          {/* <div className="m-0 hidden xl:block">
            <div className="flex h-12 w-full flex-row rounded-xl  dark:bg-stone-800 xl:w-[400px] 2xl:w-[600px]">
              <button
                type="button"
                id="radix-:r0:"
                aria-haspopup="menu"
                aria-expanded="true"
                aria-controls="radix-:r1:"
                data-state="open"
              ></button>
              <div className="flex w-full flex-row items-center pr-4">
                <input
                  style={{ color: "black" }}
                  className="w-full rounded-lg border-none focus:ring-0 dark:bg-stone-800 dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="Search for collections..."
                />
                <button className="pl-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div> */}
          <div className="m-0 hidden xl:block">
            <div className="flex h-12 w-full flex-row rounded-xl border-2 border-gray-300 dark:border-stone-700 dark:bg-stone-800 xl:w-[400px] 2xl:w-[600px] searchh">
              <button
                type="button"
                id="radix-:r0:"
                aria-haspopup="menu"
                aria-expanded="true"
                aria-controls="radix-:r1:"
                data-state="open"
              ></button>
              <div className="flex w-full flex-row items-center pr-4">
                <input
                  className="w-full rounded-lg border-none focus:ring-0 dark:bg-stone-800 dark:placeholder:text-gray-400"
                  type="text"
                  placeholder="Search for collections..."
                />
                <button className="pl-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className=" grow xl:block"></div>
          <div className=" flex-row itemsss items-center gap-6 whitespace-nowrap md:flex">
            <div className="headeritems itemsss flex-row items-center gap-6 whitespace-nowrap md:flex">
              {/* <a href="https://www.topaz.so/explore-collections">Explore</a> */}
              <Link to="/explore">Explore</Link>
              <a href="https://www.topaz.so/recent">New Collections</a>
              <button
                type="button"
                id="radix-:r2:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                Create
              </button>
              <a href="https://www.topaz.so/profile">Profile</a>
            </div>
            <a
              href="https://twitter.com/TopazMarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/SWVxuJkFSH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </a>
            <div className="mr-4 pt-1 hover:cursor-pointer">
              <button
                type="button"
                role="switch"
                aria-checked="true"
                data-state="checked"
                value="on"
                id="switch_scheme"
                className="c-fBOjjt c-fBOjjt-jqGijD-theme-dark"
              >
                <span className="c-jrMzNf">
                  <div className="px-1 pt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-moon-stars-fill h-3 w-3 text-fuchsia-600"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
            <div className="menubutton" onClick={open}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {isOpen ? (
              <div className="headermenu">
                <a href="https://www.topaz.so/explore-collections">Explore</a>
                <a href="https://www.topaz.so/recent">New Collections</a>
                <button
                  type="button"
                  id="radix-:r2:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  Create
                </button>
                <a href="https://www.topaz.so/profile">Profile</a>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="hidden lg:flex">
            <div className="flex-shrink-0 items-center">
              <div className="hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-4 md:w-4">
                    <svg
                      data-name="Icon Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      fill="white"
                    >
                      <path d="M46.47,20.07H41.16a2.15,2.15,0,0,1-1.61-.72l-2.16-2.42a1.69,1.69,0,0,0-2.53,0L33,19a3.21,3.21,0,0,1-2.39,1.07h-29A30.26,30.26,0,0,0,0,27.48H27.42a1.78,1.78,0,0,0,1.28-.54l2.56-2.66a1.67,1.67,0,0,1,1.22-.52h.1a1.7,1.7,0,0,1,1.27.57L36,26.75a2.17,2.17,0,0,0,1.61.73H60a30.26,30.26,0,0,0-1.58-7.41h-12Z"></path>
                      <path d="M16.6,43.05a1.78,1.78,0,0,0,1.27-.54l2.56-2.66a1.7,1.7,0,0,1,1.22-.52h.1A1.7,1.7,0,0,1,23,39.9l2.15,2.42a2.14,2.14,0,0,0,1.62.73H57.12a29.73,29.73,0,0,0,2.47-7.48H30.47a2.17,2.17,0,0,1-1.62-.72L26.7,32.42a1.69,1.69,0,0,0-2.53,0L22.32,34.5a3.18,3.18,0,0,1-2.38,1.07H.41a29.73,29.73,0,0,0,2.47,7.48Z"></path>
                      <path d="M38.12,12a1.74,1.74,0,0,0,1.27-.54L42,8.78a1.69,1.69,0,0,1,1.22-.51h.1a1.69,1.69,0,0,1,1.27.56l2.15,2.43a2.17,2.17,0,0,0,1.62.72h5.77A30.19,30.19,0,0,0,5.92,12Z"></path>
                      <path d="M26.53,50.46H18.64A2.17,2.17,0,0,1,17,49.74l-2.15-2.43a1.71,1.71,0,0,0-2.53,0l-1.85,2.08a3.18,3.18,0,0,1-2.38,1.07H8a30.16,30.16,0,0,0,44,0Z"></path>
                    </svg>
                  </div>
                  <div className="flex-shrink-0 whitespace-nowrap">
                    Connect Wallet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-b border-gray-200 dark:border-stone-800 md:hidden">
          <nav className="flex items-center justify-center gap-4 overflow-x-auto p-4 text-sm font-medium text-gray-900 dark:text-white">
            <div className="-my-8">
              <a href="https://www.topaz.so/">
                <div>
                  <div className="flex flex-row items-center text-2xl font-semibold">
                    <img
                      className="-mr-3 -ml-8 w-24 flex-shrink-0"
                      src="./Topaz.so - Aptos NFT Marketplace_files/topaz-dark-logo.svg"
                      alt=""
                    />
                    <div>Topaz</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grow"></div>
            <a
              href="https://twitter.com/TopazMarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/SWVxuJkFSH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                fill="currentColor"
                className="mr-4 h-5 w-5"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
            <button
              type="button"
              id="radix-:r4:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </button>
          </nav>
        </div> */}
      </header>
    </>
  )
}

export default Header
