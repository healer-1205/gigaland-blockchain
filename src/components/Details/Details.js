import React from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../home/Header/Header";
import "../home/Header/main-dist.css";
import Modal from "react-modal";

function Details() {
  let params = useParams();
  let productID = params.userID;

  // let [chain, setChain] = React.useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/Mohamed-Waled/Gigaland/main/public/HeaderData/AllChains.json"
  //     )
  //     .then((response) => {
  //       return response;
  //     })
  //     .then((jsondata) => {
  //       setChain(jsondata.data);
  //     });
  // }, []);

  Modal.setAppElement("#root");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div id="wrapper">
      <Header />
      <div className="min-h-screen pt-[70px] md:pt-[80px]">
        <section className="mx-auto flex max-w-screen-xl flex-col gap-8 py-8 px-4 md:py-16 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div className="flex flex-col gap-4 md:w-[45%]">
              <div className="flex aspect-square flex-row items-center justify-center overflow-hidden rounded-lg border border-gray-300 dark:border-stone-700">
                <img
                  className="aspect-square object-contain"
                  alt=""
                  src="../../Topaz.so - Aptos NFT Marketplace_files/6313.png"
                  loading="lazy"
                />
              </div>
              <div
                className=" rounded-lg border-2 border-gray-300 dark:border-stone-700 px-6 py-4 text-gray-400  dark:text-stone-400 itemsproperties"
                
              >
                <div className="mb-4 flex flex-row items-center">
                  <div>Item Properties</div>
                  <div className="grow"></div>
                  <div className="text-sm font-semibold">
                    <div className="flex flex-row items-center justify-center gap-1 text-xs dark:text-stone-500">
                      <div className="flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          className="h-5 w-5 flex-shrink-0 text-[#4a5568]"
                        >
                          <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path>
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path>
                        </svg>
                        <div className="text-xs dark:text-stone-500">5,296</div>
                      </div>
                      / 7,777
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-3">
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Background
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Yellow Split
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (4.72%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Clothing
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        White Ripped Tee
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (1.92%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Eyes
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Green Eye Goo
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (3.3%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Headwear
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Octopus
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (1.22%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Mouth
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Wheat
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (6.22%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Skin
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Orange
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (8.1%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[150px] flex h-full flex-col items-start items-center justify-start rounded-lg border-2 border-gray-300 px-3 py-2 dark:border-stone-700 md:w-auto md:gap-2">
                    <div className="text-center text-xs text-gray-500 dark:text-stone-500">
                      Extra
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2 pt-2 text-center text-sm dark:text-stone-300 md:pt-0">
                      <div>
                        Empty
                        <div className="text-center text-xs opacity-100 dark:opacity-40">
                          (77.3%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow flex-col">
              <div className="flex flex-row items-center">
                <div className="flex flex-col gap-2">
                  <a
                    className="text-gray-400 underline dark:text-stone-400"
                    href="https://www.topaz.so/collection/Aptos-Monkeys-f932dcb983"
                  >
                    Aptos Monkeys
                  </a>
                  <div className="flex flex-row items-center gap-2 text-xs text-gray-400 dark:text-stone-400">
                    <div>Floor Price</div>
                    <div className="w-4 opacity-50">
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
                    <div>19.9</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="mb-4 text-3xl font-bold text-gray-800 dark:text-stone-300 md:text-5xl">
                  AptosMonkeys #{productID}
                </div>
                <div className="flex flex-row gap-1 text-xs text-gray-400 dark:text-stone-400">
                  Owned by
                  <a
                    className="underline"
                    href="https://www.topaz.so/u/0xccb33e195b34a61934c61f6bca1371d0666fe92a7dfcfc68be32e9d859ecabf7"
                  >
                    0xccb3...ecabf7
                  </a>
                </div>
              </div>
              <div className="my-8 flex flex-col gap-4">
                <div className="inline-block w-full rounded-lg border-2 p-4 dark:border-stone-700 md:px-6">
                  <div className="flex flex-col gap-5">
                    <div className="text-gray-400 dark:text-stone-400">
                      Current Price
                    </div>
                    <div className="flex flex-row items-center gap-2 text-xl font-medium md:gap-4 md:text-3xl">
                      <div className="w-5 md:w-7">
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
                      <div>25.5 APT</div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                        <div className="hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap">
                          Buy Now
                        </div>
                        <div className="hover:bg-yellow-200 hover:border-yellow-200 flex text-base flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B] font-medium text-black hover:cursor-pointer dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap" onClick={() => {
                          setIsModalOpen(true);
                        }}>
                          Make Offer
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-stone-400">
                      5% Creator Royalty
                    </div>
                    <div className="-mt-4 text-xs text-gray-400 dark:text-stone-400">
                      2.5% Marketplace Fee
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border-2 border-gray-200 text-gray-400 dark:border-stone-700 dark:text-stone-400">
                  <div className="border-b-2 py-3 pl-6 dark:border-stone-700">
                    Offers
                  </div>
                  <ul
                    // role="list"
                    className="max-h-[230px] divide-y divide-y-2 divide-gray-200 overflow-scroll dark:divide-stone-700"
                  >
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                          >
                            0x2e49...7ba366
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span> 23h 30m 19s</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.0001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                          >
                            0x2e49...7ba366
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.0001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x383c77d9f9ff7e3a3ffaad08217455995f6e506357ccd75524080c79177ef4e5"
                          >
                            0x383c...7ef4e5
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 41m 20s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.0001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x417771f9f060a5b80b342468085f7c67dfeb92f824a21d4a978b510ac2d05eb4"
                          >
                            0x4177...d05eb4
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 42m 51s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.0001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xe782c04fbceb42f5a6c14ed5efe7cc7226ec322fc1c5b63506967d309327a9a0"
                          >
                            0xe782...27a9a0
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 11m 33s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.00001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x1cfc88e776dcfdae06e7bafedf2ae313882c6d3d2e17605ac947f838a40d337"
                          >
                            0x1cfc...40d337
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span> 38s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.00001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x1cfc88e776dcfdae06e7bafedf2ae313882c6d3d2e17605ac947f838a40d337"
                          >
                            0x1cfc...40d337
                          </a>
                        </div>
                        <div>
                          <div>Expires in</div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.00001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 21m 32s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 21m 47s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 22m 5s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 22m 23s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 22m 49s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 23m 11s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 23m 47s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0x5953295b257cdbb04881c706cca1d60deb5f439b61403d27f353d17f585fa9dd"
                          >
                            0x5953...5fa9dd
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 24m 27s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0.000001 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 10m 46s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 11m 3s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 11m 22s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 11m 44s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 12m 3s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 13m 4s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xc534d2f6e00561d94ad46ea578d2631e6e0efc0341549c388cbb9bb643e79f75"
                          >
                            0xc534...e79f75
                          </a>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 23h 13m 26s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>0 APT</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-gray-200 text-gray-400 dark:border-stone-700 dark:text-stone-400">
                  <div className="border-b-2 py-3 pl-6 dark:border-stone-700">
                    Collection Offers
                  </div>
                  <ul
                    // role="list"
                    className="max-h-[230px] divide-y divide-y-2 divide-gray-200 overflow-scroll dark:divide-stone-700"
                  >
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0xc8b49181fbce3df87225b3c5da118882a681335dcb001084aad168dc7af06014"
                            >
                              0xc8b4...f06014
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 3 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span>2d 23h 43m 41s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>16.61 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0x427f73de161d8614c31a20f52367e4364d0c6786be8fb586daea91d8723deb8c"
                            >
                              0x427f...3deb8c
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 1 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span>2d 23h 42m 15s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>16.6 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0x961a1970bf3c2d2f1b460c1b7b3cf75f37fab892815e2cbacc89e5947272dbc6"
                            >
                              0x961a...72dbc6
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 1 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 21h 44m 48s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>16.33 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0x78cd9498c2989a67e4eb6f6a210bf53bf569f04e58b3713dbf35e9bf3348308a"
                            >
                              0x78cd...48308a
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 1 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 13h 14m 17s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>16.1 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0x7a5db0b8684c897be5f958605421c839f1271d08f43a38a5fb23136aaaf2028d"
                            >
                              0x7a5d...f2028d
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 3 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span> 19h 12m 49s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>15.5 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <div className="flex flex-row gap-1">
                            <a
                              className="underline"
                              href="https://www.topaz.so/u/0x940d89ac47c71835b79ac4ca552c6b9178d72f5e0373880f164a66c593dfc9d8"
                            >
                              0x940d...dfc9d8
                            </a>
                            <span className="hidden md:inline-block">
                              offered for up to 1 item(s)
                            </span>
                          </div>
                        </div>
                        <div>
                          <div>
                            Expires in <span>1d 21h 7m 47s</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div className="w-4">
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
                            <div>15.1 APT per item</div>
                          </div>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-gray-200 text-gray-400 dark:border-stone-700 dark:text-stone-400">
                  <div className="border-b-2 py-3 pl-6 dark:border-stone-700">
                    Latest Activity
                  </div>
                  <ul
                    // role="list"
                    className="max-h-[230px] divide-y divide-y-2 divide-gray-200 overflow-scroll dark:divide-stone-700"
                  >
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xccb33e195b34a61934c61f6bca1371d0666fe92a7dfcfc68be32e9d859ecabf7"
                          >
                            0xccb3...ecabf7
                          </a>
                        </div>
                        <div>3min ago</div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            <div>Listed for</div>
                            <div className="w-4">
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
                            <div>25.5 APT</div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </li>
                    <li className="py-4 px-3 text-sm">
                      <div className="flex flex-row items-center justify-between itestextsx">
                        <div>
                          <a
                            className="underline"
                            href="https://www.topaz.so/u/0xccb33e195b34a61934c61f6bca1371d0666fe92a7dfcfc68be32e9d859ecabf7"
                          >
                            0xccb3...ecabf7
                          </a>
                        </div>
                        <div>3min ago</div>
                      </div>
                      <div className="flex flex-row items-center justify-between pt-2">
                        <div>
                          <div className="flex flex-row items-center gap-2 whitespace-nowrap text-sm text-black dark:text-stone-400">
                            Delisted 💎✋
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="ml-4 mb-4 text-left text-lg text-gray-400 dark:text-stone-400 md:text-xl">
                More from this collection
              </div>
              <section className="mx-auto grid max-w-screen-xl grid-cols-2 gap-1 px-2 md:grid-cols-4 md:gap-2 lg:grid-cols-5">
                <a
                  className="group whitespace-nowrap rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-700 border-2 border-gray-300 dark:border-stone-700"
                  href="https://www.topaz.so/assets/Aptos-Monkeys-f932dcb983/AptosMonkeys%20%236378/0"
                >
                  <div>
                    <img
                      className="mx-auto aspect-square w-full rounded-t-md border-b-2 border-gray-300 object-cover dark:border-stone-700"
                      alt=""
                      src="../../Topaz.so - Aptos NFT Marketplace_files/6378.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 text-left">
                    <div className="mb-1 flex flex-row items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm font-semibold">
                      AptosMonkeys #6378
                    </div>
                    <div className="px-4 text-sm text-gray-500 dark:text-stone-500">
                      Buy Now
                    </div>
                    <div>
                      <div className="flex flex-col px-4">
                        <div className="flex flex-row items-center gap-2 text-sm font-semibold">
                          <div className="w-4">
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
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            19.9
                          </div>
                          <div className="grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group whitespace-nowrap rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-700 border-2 border-gray-300 dark:border-stone-700"
                  href="https://www.topaz.so/assets/Aptos-Monkeys-f932dcb983/AptosMonkeys%20%234896/0"
                >
                  <div>
                    <img
                      className="mx-auto aspect-square w-full rounded-t-md border-b-2 border-gray-300 object-cover dark:border-stone-700"
                      alt=""
                      src="../../Topaz.so - Aptos NFT Marketplace_files/4896.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 text-left">
                    <div className="mb-1 flex flex-row items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm font-semibold">
                      AptosMonkeys #4896
                    </div>
                    <div className="px-4 text-sm text-gray-500 dark:text-stone-500">
                      Buy Now
                    </div>
                    <div>
                      <div className="flex flex-col px-4">
                        <div className="flex flex-row items-center gap-2 text-sm font-semibold">
                          <div className="w-4">
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
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            19.9
                          </div>
                          <div className="grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group whitespace-nowrap rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-700 border-2 border-gray-300 dark:border-stone-700"
                  href="https://www.topaz.so/assets/Aptos-Monkeys-f932dcb983/AptosMonkeys%20%235657/0"
                >
                  <div>
                    <img
                      className="mx-auto aspect-square w-full rounded-t-md border-b-2 border-gray-300 object-cover dark:border-stone-700"
                      alt=""
                      src="../../Topaz.so - Aptos NFT Marketplace_files/5657.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 text-left">
                    <div className="mb-1 flex flex-row items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm font-semibold">
                      AptosMonkeys #5657
                    </div>
                    <div className="px-4 text-sm text-gray-500 dark:text-stone-500">
                      Buy Now
                    </div>
                    <div>
                      <div className="flex flex-col px-4">
                        <div className="flex flex-row items-center gap-2 text-sm font-semibold">
                          <div className="w-4">
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
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            20
                          </div>
                          <div className="grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group whitespace-nowrap rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-700 border-2 border-gray-300 dark:border-stone-700"
                  href="https://www.topaz.so/assets/Aptos-Monkeys-f932dcb983/AptosMonkeys%20%233246/0"
                >
                  <div>
                    <img
                      className="mx-auto aspect-square w-full rounded-t-md border-b-2 border-gray-300 object-cover dark:border-stone-700"
                      alt=""
                      src="../../Topaz.so - Aptos NFT Marketplace_files/3246.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 text-left">
                    <div className="mb-1 flex flex-row items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm font-semibold">
                      AptosMonkeys #3246
                    </div>
                    <div className="px-4 text-sm text-gray-500 dark:text-stone-500">
                      Buy Now
                    </div>
                    <div>
                      <div className="flex flex-col px-4">
                        <div className="flex flex-row items-center gap-2 text-sm font-semibold">
                          <div className="w-4">
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
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            20
                          </div>
                          <div className="grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="group whitespace-nowrap rounded-lg hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-700 border-2 border-gray-300 dark:border-stone-700"
                  href="https://www.topaz.so/assets/Aptos-Monkeys-f932dcb983/AptosMonkeys%20%235246/0"
                >
                  <div>
                    <img
                      className="mx-auto aspect-square w-full rounded-t-md border-b-2 border-gray-300 object-cover dark:border-stone-700"
                      alt=""
                      src="../../Topaz.so - Aptos NFT Marketplace_files/5246.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4 text-left">
                    <div className="mb-1 flex flex-row items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap px-4 text-sm font-semibold">
                      AptosMonkeys #5246
                    </div>
                    <div className="px-4 text-sm text-gray-500 dark:text-stone-500">
                      Buy Now
                    </div>
                    <div>
                      <div className="flex flex-col px-4">
                        <div className="flex flex-row items-center gap-2 text-sm font-semibold">
                          <div className="w-4">
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
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            20.5
                          </div>
                          <div className="grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </section>
      </div>

      <a href="/" id="back-to-top"></a>

      <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="Modal"
          overlayClassName="modalOverLay"
        >
     <div
            className="max-w-md flex w-full transform flex-col gap-8 overflow-hidden rounded-lg border-[1px] border-gray-50 bg-white p-6 text-left align-middle drop-shadow-2xl transition-all dark:border-stone-800 dark:bg-stone-900 opacity-100 scale-100"
          >
            <div
              className="flex w-full flex-row items-center justify-center text-center text-xl font-semibold leading-6 text-gray-400"
              // id="headlessui-dialog-title-:rm:"
              // data-headlessui-state="open"
            >
              <div className="-mr-8 hover:cursor-pointer" onClick={() => {
                setIsModalOpen(false);
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </div>
              <div className="grow"></div>
              <div>Place Offer</div>
              <div className="grow"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-gray-400 dark:text-stone-400">
                Placing an offer removes coins from your wallet. You can cancel
                your offer anytime to get your coins back.
              </div>
              <div>
                <div className="mb-4 text-xl">Price</div>
                <div className="flex flex-row items-center justify-center gap-4">
                  <input
                    placeholder="100"
                    type="number"
                    id="bidPrice"
                    className="w-full rounded-xl border-2 border-gray-300 bg-transparent text-left text-xl placeholder:text-gray-300 dark:border-stone-700 dark:placeholder:text-stone-500"
                    name="bidPrice"
                    tabIndex="0"
                  />
                  <div className="-mb-3 -mr-2 h-10 w-10">
                    <svg
                      data-name="Icon Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      fill="white"
                    >
                      <path d="M46.47,20.07H41.16a2.15,2.15,0,0,1-1.61-.72l-2.16-2.42a1.69,1.69,0,0,0-2.53,0L33,19a3.21,3.21,0,0,1-2.39,1.07h-29A30.26,30.26,0,0,0,0,27.48H27.42a1.78,1.78,0,0,0,1.28-.54l2.56-2.66a1.67,1.67,0,0,1,1.22-.52h.1a1.7,1.7,0,0,1,1.27.57L36,26.75a2.17,2.17,0,0,0,1.61.73H60a30.26,30.26,0,0,0-1.58-7.41h-12Z"></path>{" "}
                      <path d="M16.6,43.05a1.78,1.78,0,0,0,1.27-.54l2.56-2.66a1.7,1.7,0,0,1,1.22-.52h.1A1.7,1.7,0,0,1,23,39.9l2.15,2.42a2.14,2.14,0,0,0,1.62.73H57.12a29.73,29.73,0,0,0,2.47-7.48H30.47a2.17,2.17,0,0,1-1.62-.72L26.7,32.42a1.69,1.69,0,0,0-2.53,0L22.32,34.5a3.18,3.18,0,0,1-2.38,1.07H.41a29.73,29.73,0,0,0,2.47,7.48Z"></path>{" "}
                      <path d="M38.12,12a1.74,1.74,0,0,0,1.27-.54L42,8.78a1.69,1.69,0,0,1,1.22-.51h.1a1.69,1.69,0,0,1,1.27.56l2.15,2.43a2.17,2.17,0,0,0,1.62.72h5.77A30.19,30.19,0,0,0,5.92,12Z"></path>{" "}
                      <path d="M26.53,50.46H18.64A2.17,2.17,0,0,1,17,49.74l-2.15-2.43a1.71,1.71,0,0,0-2.53,0l-1.85,2.08a3.18,3.18,0,0,1-2.38,1.07H8a30.16,30.16,0,0,0,44,0Z"></path>
                    </svg>
                  </div>
                  <div className="text-xl">APT</div>
                </div>
              </div>
              <div>
                <div className="mb-4 text-xl">Offer expiration</div>
                <div className="flex flex-row gap-2">
                  <input
                    placeholder="24"
                    type="text"
                    id="expiration"
                    className="w-full rounded-xl border-2 border-gray-300 bg-transparent bg-transparent text-left text-xl placeholder:text-gray-300 dark:border-stone-700"
                    name="expiration"
                    defaultValue="48"
                  />
                  <select
                    className="rounded-xl border-2 border-gray-300 bg-transparent text-xl dark:border-stone-700"
                    name="unit"
                    id="unit"
                  >
                    <option value="hours">Hours</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 font-semibold">
              <button>
                <div
                  className="hover:bg-yellow-200 hover:border-yellow-200 flex text-base
  flex-row items-center justify-center rounded-lg border-2 border-[#FFE32B] bg-[#FFE32B]
  font-medium text-black hover:cursor-pointer
  dark:bg-fuchsia-900 dark:border-fuchsia-800 dark:text-white dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-800 px-4 h-10 flex-shrink-0 whitespace-nowrap"
                >
                  Create Offer
                </div>
              </button>
            </div>
          </div>
        </Modal>


    </div>
  );
}

export default Details;