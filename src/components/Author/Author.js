import React from "react";
import { Link } from "react-router-dom";

function Author() {
  return (
    <div id="wrapper">
      <header className="header-light scroll-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    <div id="logo">
                      <Link to="/">
                        <img alt="" src="images/logo-5.png" />
                      </Link>
                    </div>
                  </div>
                  <div className="de-flex-col">
                    <input
                      id="quick_search"
                      className="xs-hide"
                      name="quick_search"
                      placeholder="search item here..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link to="/">
                        Home<span></span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/">Homepage 1</Link>
                        </li>
                        <li>
                          <Link to="/">Homepage 2</Link>
                        </li>
                        <li>
                          <Link to="/">Homepage 3</Link>
                        </li>
                        <li>
                          <Link to="/">Homepage 4</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/explore">
                        Explore<span></span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/explore">Explore</Link>
                        </li>
                        <li>
                          <Link to="/explore">Explore 2</Link>
                        </li>
                        <li>
                          <Link to="/explore">New: Music NFT</Link>
                        </li>
                        <li>
                          <Link to="/collection">Collections</Link>
                        </li>
                        <li>
                          <Link to="/explore">Live Auction</Link>
                        </li>
                        <li>
                          <Link to="/explore">Item Details</Link>
                        </li>
                        <li>
                          <Link to="/explore">Help Center</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        Author<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="/">Author</a>
                        </li>
                        <li>
                          <a href="/">Profile</a>
                        </li>
                        <li>
                          <a href="/">Wallet</a>
                        </li>
                        <li>
                          <a href="/">Create</a>
                        </li>
                        <li>
                          <a href="/">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        Stats<span></span>
                      </a>
                      <ul>
                        <li>
                          <a href="/">Activity</a>
                        </li>
                        <li>
                          <a href="/">Rankings</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="menu_side_area">
                    <div className="de-login-menu">
                      <span href="/" id="switch_scheme">
                        <i className="ss_dark fa fa-moon-o"></i>
                        <i className="ss_light fa fa-sun-o"></i>
                      </span>
                      <a href="/" className="btn-main btn-wallet">
                        <i className="icon_wallet_alt"></i>
                        <span>Create</span>
                      </a>
                      <span
                        id="de-click-menu-notification"
                        className="de-menu-notification"
                      >
                        <span className="d-count">8</span>
                        <i className="fa fa-bell"></i>
                      </span>
                      <span
                        id="de-click-menu-profile"
                        className="de-menu-profile"
                      >
                        <img
                          src="images/author_single/author_thumbnail.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </span>
                      <div id="de-submenu-notification" className="de-submenu">
                        <div className="de-flex">
                          <div>
                            <h4>Notifications</h4>
                          </div>
                          <a href="/">Show all</a>
                        </div>
                        <ul>
                          <li>
                            <a href="/">
                              <img
                                className="lazy"
                                src="images/author/author-2.jpg"
                                alt=""
                              />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Mamie Barnett</b> started following you
                                </span>
                                <span className="d-time">1 hour ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img
                                className="lazy"
                                src="images/author/author-3.jpg"
                                alt=""
                              />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Nicholas Daniels</b> liked your item
                                </span>
                                <span className="d-time">2 hours ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img
                                className="lazy"
                                src="images/author/author-4.jpg"
                                alt=""
                              />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Lori Hart</b> started following you
                                </span>
                                <span className="d-time">18 hours ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img
                                className="lazy"
                                src="images/author/author-5.jpg"
                                alt=""
                              />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Jimmy Wright</b> liked your item
                                </span>
                                <span className="d-time">1 day ago</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img
                                className="lazy"
                                src="images/author/author-6.jpg"
                                alt=""
                              />
                              <div className="d-desc">
                                <span className="d-name">
                                  <b>Karla Sharp</b> started following you
                                </span>
                                <span className="d-time">3 days ago</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div id="de-submenu-profile" className="de-submenu">
                        <div className="d-name">
                          <h4>Monica Lucas</h4>
                          <a href="/profile">Set display name</a>
                        </div>
                        <div className="spacer-10"></div>
                        <div className="d-balance">
                          <h4>Balance</h4>
                          12.858 ETH
                        </div>
                        <div className="spacer-10"></div>
                        <div className="d-wallet">
                          <h4>My Wallet</h4>
                          <span id="wallet" className="d-wallet-address">
                            DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </div>
                        <div className="d-line"></div>
                        <ul className="de-submenu-profile">
                          <li>
                            <a href="/">
                              <i className="fa fa-user"></i> My profile
                            </a>
                          </li>
                          <li>
                            <a href="/profile">
                              <i className="fa fa-pencil"></i> Edit profile
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fa fa-sign-out"></i> Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span id="menu-btn"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          class="text-light"
          data-bgimage="url(images/author_single/author_banner.jpg) top"
        ></section>

        <section aria-label="section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="d_profile de-flex">
                  <div class="de-flex-col">
                    <div class="profile_avatar">
                      <img
                        src="images/author_single/author_thumbnail.jpg"
                        alt=""
                      />
                      <i class="fa fa-check"></i>
                      <div class="profile_name">
                        <h4>
                          Monica Lucas
                          <span class="profile_username">@monicaaa</span>
                          <span id="wallet" class="profile_wallet">
                            DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* <div class="profile_follow de-flex">
                    <div class="de-flex-col">
                      <div class="profile_follower">500 followers</div>
                    </div>
                    <div class="de-flex-col">
                      <a href="/" class="btn-main">
                        Follow
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>

              <div class="col-md-12">
                <div class="de_tab tab_simple">
                  <ul class="de_nav">
                    <li class="active">
                      <span>On Sale</span>
                    </li>
                    <li>
                      <span>Created</span>
                    </li>
                    <li>
                      <span>Liked</span>
                    </li>
                  </ul>

                  <div class="de_tab_content">
                    <div class="tab-1">
                      <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="16"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-1.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Pinky Ocean</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.08 ETH<span>1/20</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>50</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-2.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>The Animals</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.06 ETH<span>1/22</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="14"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-3.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Three Donuts</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.05 ETH<span>1/11</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>97</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-4.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Graffiti Colors</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.02 ETH<span>1/15</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>73</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-2">
                      <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="14"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-3.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Three Donuts</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.05 ETH<span>1/11</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>97</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="16"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-1.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Pinky Ocean</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.08 ETH<span>1/20</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>50</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-2.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>The Animals</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.06 ETH<span>1/22</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <div class="nft__item_extra">
                                <div class="nft__item_buttons">
                                  <button onclick="location.href='item-details.html'">
                                    Buy Now
                                  </button>
                                  <div class="nft__item_share">
                                    <h4>Share</h4>
                                    <a
                                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-facebook fa-lg"></i>
                                    </a>
                                    <a
                                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <i class="fa fa-twitter fa-lg"></i>
                                    </a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                                      <i class="fa fa-envelope fa-lg"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a href="item-details.html">
                                <img
                                  src="images/author_single/porto-4.jpg"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Graffiti Colors</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.02 ETH<span>1/15</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>73</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-3">
                      <div class="row">
                        <div class="col-lg-3 col-md-6">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-1.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <a href="item-details.html">
                                <img
                                  src="images/items/anim-4.webp"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>The Truth</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.06 ETH<span>1/20</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>26</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="6"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-2.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <a href="item-details.html">
                                <img
                                  src="images/items/anim-2.webp"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Running Puppets</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.03 ETH<span>1/24</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>45</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="nft__item">
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-3.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <a href="item-details.html">
                                <img
                                  src="images/items/anim-1.webp"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>USA Wordmation</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.09 ETH<span>1/25</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>76</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="nft__item">
                            <div
                              class="de_countdown"
                              data-year="2022"
                              data-month="9"
                              data-day="8"
                              data-hour="8"
                            ></div>
                            <div class="author_list_pp">
                              <a href="author.html">
                                <img
                                  class="lazy"
                                  src="images/author/author-4.jpg"
                                  alt=""
                                />
                                <i class="fa fa-check"></i>
                              </a>
                            </div>
                            <div class="nft__item_wrap">
                              <a href="item-details.html">
                                <img
                                  src="images/items/anim-5.webp"
                                  class="lazy nft__item_preview"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="nft__item_info">
                              <a href="item-details.html">
                                <h4>Loop Donut</h4>
                              </a>
                              <div class="nft__item_click">
                                <span></span>
                              </div>
                              <div class="nft__item_price">
                                0.09 ETH<span>1/14</span>
                              </div>
                              <div class="nft__item_action">
                                <a href="/">Place a bid</a>
                              </div>
                              <div class="nft__item_like">
                                <i class="fa fa-heart"></i>
                                <span>94</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a href="/" id="back-to-top"></a>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>Marketplace</h5>
                <ul>
                  <li>
                    <a href="/">All NFTs</a>
                  </li>
                  <li>
                    <a href="/">Art</a>
                  </li>
                  <li>
                    <a href="/">Music</a>
                  </li>
                  <li>
                    <a href="/">Domain Names</a>
                  </li>
                  <li>
                    <a href="/">Virtual World</a>
                  </li>
                  <li>
                    <a href="/">Collectibles</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>Resources</h5>
                <ul>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Partners</a>
                  </li>
                  <li>
                    <a href="/">Suggestions</a>
                  </li>
                  <li>
                    <a href="/">Discord</a>
                  </li>
                  <li>
                    <a href="/">Docs</a>
                  </li>
                  <li>
                    <a href="/">Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>Community</h5>
                <ul>
                  <li>
                    <a href="/">Community</a>
                  </li>
                  <li>
                    <a href="/">Documentation</a>
                  </li>
                  <li>
                    <a href="/">Brand Assets</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Forum</a>
                  </li>
                  <li>
                    <a href="/">Mailing List</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-1">
              <div class="widget">
                <h5>Newsletter</h5>
                <p>
                  Signup for our newsletter to get the latest news in your
                  inbox.
                </p>
                <form
                  action="blank.php"
                  class="row form-dark"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div class="col text-center">
                    <input
                      class="form-control"
                      id="txt_subscribe"
                      name="txt_subscribe"
                      placeholder="enter your email"
                      type="text"
                    />{" "}
                    <a href="/" id="btn-subscribe">
                      <i class="arrow_right bg-color-secondary"></i>
                    </a>
                    <div class="clearfix"></div>
                  </div>
                </form>
                <div class="spacer-10"></div>
                <small>Your email is safe with us. We don't spam.</small>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex">
                  <div class="de-flex-col">
                    <a href="index.html">
                      <img alt="" class="f-logo" src="images/logo.png" />
                      <span class="copy">
                        &copy; Copyright 2022 - Gigaland by Designesia
                      </span>
                    </a>
                  </div>
                  <div class="de-flex-col">
                    <div class="social-icons">
                      <a href="/">
                        <i class="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-linkedin fa-lg"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-pinterest fa-lg"></i>
                      </a>
                      <a href="/">
                        <i class="fa fa-rss fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Author;
