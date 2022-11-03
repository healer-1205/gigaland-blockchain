import React from "react";
import { Link } from "react-router-dom";

function Auction() {
  return (
    <div id="wrapper">
      <header className="transparent">
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
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section
          id="subheader"
          className="text-light"
          data-bgimage="url(images/background/subheader.jpg) top"
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>List for Auction</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="section">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-lg-7 offset-lg-1">
                <form
                  id="form-create-item"
                  className="form-border"
                  method="post"
                  action="email.php"
                >
                  <div className="field-set">
                    <h5>Select Type</h5>
                    <div className="de_tab tab_methods">
                      <p className="p-info">
                        Choose between English , Dutch or Fixed auction types.
                      </p>

                      <div
                        id="item_collection"
                        className="dropdown fullwidth mb20"
                      >
                        <a href="/" className="btn-selector">
                          Select Type
                        </a>
                        <ul>
                          <li>
                            <span>Select Type</span>
                          </li>
                          <li>
                            <span>English</span>
                          </li>
                          <li>
                            <span>Dutch</span>
                          </li>
                          <li>
                            <span>Fixed</span>
                          </li>
                        </ul>
                      </div>
                      <div className="de_tab_content">
                        <div id="tab_opt_1">
                          <h5>Price</h5>
                          <input
                            type="text"
                            name="item_price"
                            id="item_price"
                            className="form-control"
                            placeholder="enter price for one item (ETH)"
                          />
                          <div className="spacer-10"></div>
                          <div className="row">
                            <h3>Auction End By Date</h3>
                            <div className="spacer-10"></div>

                            <div className="col-md-6">
                              <h5>Starting date</h5>
                              <input
                                type="date"
                                name="bid_starting_date"
                                id="bid_starting_date"
                                className="form-control"
                                min="1997-01-01"
                              />
                            </div>
                            <div className="col-md-6">
                              <h5>Expiration date</h5>
                              <input
                                type="date"
                                name="bid_expiration_date"
                                id="bid_expiration_date"
                                className="form-control"
                              />
                            </div>
                          </div>
                            <div className="spacer-20"></div>
                          <div className="row">
                            <h3>Auction End by time</h3>
                            <div className="spacer-10"></div>

                            <div className="col-md-6">
                              <h5>Starting Date-Time</h5>
                              <input
                                type="datetime-local"
                                // type="date"
                                name="bid_starting_date"
                                id="bid_starting_date"
                                className="form-control"
                                min="1997-01-01"
                              />
                            </div>
                            <div className="col-md-6">
                              <h5>Expiration Date-Time</h5>
                              <input
                                type="datetime-local"
                                name="bid_expiration_date"
                                id="bid_expiration_date"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="spacer-20"></div>
                    <h5>Auction End by Block</h5>
                    <input
                      type="text"
                      name="item_title"
                      id="item_title"
                      className="form-control"
                    //   placeholder="e.g. 'Crypto Funk"
                    />

                    <div className="spacer-20"></div>

                    {/* <h5>Description</h5>
                    <textarea
                      data-autoresize
                      name="item_desc"
                      id="item_desc"
                      className="form-control"
                      placeholder="e.g. 'This is very limited item'"
                    ></textarea> */}

                    {/* <div className="spacer-20"></div> */}

                    {/* <h5>Royalties</h5>
                    <input
                      type="text"
                      name="item_royalties"
                      id="item_royalties"
                      className="form-control"
                      placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%"
                    /> */}

                    <div className="spacer-single"></div>

                    <input
                      type="button"
                      id="submit"
                      className="btn-main"
                      value="List Asset"
                    />
                    <div className="spacer-single"></div>
                  </div>
                </form>
              </div>

              <div className="col-lg-3 col-sm-6 col-xs-12">
                <h5>Preview item</h5>
                <div className="nft__item">
                  <div
                    className="de_countdown"
                    data-year="2022"
                    data-month="9"
                    data-day="16"
                    data-hour="8"
                  ></div>
                  <div className="author_list_pp">
                    <a href="/">
                      <img
                        className="lazy"
                        src="images/author/author-1.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a>
                  </div>
                  <div className="nft__item_wrap">
                    <a href="/">
                      <img
                        src="images/collections/coll-item-3.jpg"
                        id="get_file_2"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a href="/">
                      <h4>Pinky Ocean</h4>
                    </a>
                    {/* <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                      0.08 ETH<span>1/20</span>
                    </div>
                    <div className="nft__item_action">
                      <a href="/">Place a bid</a>
                    </div> */}
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="/" id="back-to-top"></a>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-1">
              <div className="widget">
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
            <div className="col-md-3 col-sm-6 col-xs-1">
              <div className="widget">
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
            <div className="col-md-3 col-sm-6 col-xs-1">
              <div className="widget">
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
            <div className="col-md-3 col-sm-6 col-xs-1">
              <div className="widget">
                <h5>Newsletter</h5>
                <p>
                  Signup for our newsletter to get the latest news in your
                  inbox.
                </p>
                <form
                  action="blank.php"
                  className="row form-dark"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div className="col text-center">
                    <input
                      className="form-control"
                      id="txt_subscribe"
                      name="txt_subscribe"
                      placeholder="enter your email"
                      type="text"
                    />{" "}
                    <a href="/" id="btn-subscribe">
                      <i className="arrow_right bg-color-secondary"></i>
                    </a>
                    <div className="clearfix"></div>
                  </div>
                </form>
                <div className="spacer-20"></div>
                <small>Your email is safe with us. We don't spam.</small>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    <a href="index.html">
                      <img alt="" className="f-logo" src="images/logo.png" />
                      <span className="copy">
                        &copy; Copyright 2022 - Gigaland by Designesia
                      </span>
                    </a>
                  </div>
                  <div className="de-flex-col">
                    <div className="social-icons">
                      <a href="/">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin fa-lg"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-pinterest fa-lg"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-rss fa-lg"></i>
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

export default Auction;
