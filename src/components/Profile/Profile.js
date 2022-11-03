import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer/Footer";

function Profile() {
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
        <section id="subheader">
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Edit Profile</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-main" aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form
                  id="form-create-item"
                  className="form-border"
                  method="post"
                  action="email.php"
                >
                  <div className="de_tab tab_simple">
                    <ul className="de_nav">
                      <li className="active">
                        <span>
                          <i className="fa fa-user"></i>Profile
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-exclamation-circle"></i>
                          Notifications
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-paint-brush"></i>Appearance
                        </span>
                      </li>
                    </ul>
                    <div className="de_tab_content">
                      <div className="tab-1">
                        <div className="row wow fadeIn">
                          <div className="col-lg-8 mb-sm-20">
                            <div className="field-set">
                              <h5>Username</h5>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder="Enter username"
                              />
                              <div className="spacer-20"></div>
                              <h5>Custom URL</h5>
                              <input
                                type="text"
                                name="custom_url"
                                id="custom_url"
                                className="form-control"
                                placeholder="Enter your custom URL"
                              />
                              <div className="spacer-20"></div>
                              <h5>Bio</h5>
                              <textarea
                                name="bio"
                                id="bio"
                                className="form-control"
                                placeholder="Tell the world who you are!"
                              />
                              <div className="spacer-20"></div>
                              <h5>Email Address*</h5>
                              <input
                                type="text"
                                name="email_address"
                                id="email_address"
                                className="form-control"
                                placeholder="Enter email"
                              />
                              <div className="spacer-20"></div>
                              <h5>
                                <i className="fa fa-link"></i> Your site
                              </h5>
                              <input
                                type="text"
                                name="your_site"
                                id="your_site"
                                className="form-control"
                                placeholder="Enter Website URL"
                              />
                              <div className="spacer-20"></div>
                              <h5>
                                <i className="fa fa-twitter"></i> Twitter
                                username
                              </h5>
                              <input
                                type="text"
                                name="twitter_usernam"
                                id="twitter_usernam"
                                className="form-control"
                                placeholder="Enter Twitter username"
                              />
                              <div className="spacer-20"></div>
                              <h5>
                                <i className="fa fa-instagram"></i> Instagram
                                username
                              </h5>
                              <input
                                type="text"
                                name="instagram_username"
                                id="instagram_username"
                                className="form-control"
                                placeholder="Enter Instagram username"
                              />
                            </div>
                          </div>
                          <div id="sidebar" className="col-lg-4">
                            <h5>
                              Profile image{" "}
                              <i
                                className="fa fa-info-circle id-color-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Recommend 400 x 400. Max size: 50MB. Click the image to upload."
                              ></i>
                            </h5>
                            <img
                              src="images/author_single/author_thumbnail.jpg"
                              id="click_profile_img"
                              className="d-profile-img-edit img-fluid"
                              alt=""
                            />
                            <input type="file" id="upload_profile_img" />
                            <div className="spacer-30"></div>
                            <h5>
                              Profile banner{" "}
                              <i
                                className="fa fa-info-circle id-color-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Recommend 1500 x 500. Max size: 50MB. Click the image to upload."
                              ></i>
                            </h5>
                            <img
                              src="images/author_single/author_banner.jpg"
                              id="click_banner_img"
                              className="d-banner-img-edit img-fluid"
                              alt=""
                            />
                            <input type="file" id="upload_banner_img" />
                          </div>
                        </div>
                      </div>
                      <div className="tab-2">
                        <div className="row wow fadeIn">
                          <div className="col-md-6 mb-sm-20">
                            <div className="switch-with-title s2">
                              <h5>Item Sold</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-item-sold"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-item-sold"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When someone purhased your item.
                              </p>
                            </div>
                            <div className="spacer-20"></div>
                            <div className="switch-with-title s2">
                              <h5>Bid Activity</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-bid-activity"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-bid-activity"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When someone purhased your item.
                              </p>
                            </div>
                            <div className="spacer-20"></div>
                            <div className="switch-with-title s2">
                              <h5>Price Change</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-price-change"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-price-change"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When an item you made an offer on changes in
                                price.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="switch-with-title s2">
                              <h5>Auction Expiration</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-auction-expiration"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-auction-expiration"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When an auction you created ends.
                              </p>
                            </div>
                            <div className="spacer-20"></div>
                            <div className="switch-with-title s2">
                              <h5>Outbid</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-outbid"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-outbid"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When an offer you placed is exceeded by another
                                user.
                              </p>
                            </div>
                            <div className="spacer-20"></div>
                            <div className="switch-with-title s2">
                              <h5>Successful Purchase</h5>
                              <div className="de-switch">
                                <input
                                  type="checkbox"
                                  id="notif-successful-purchase"
                                  className="checkbox"
                                />
                                <label htmlFor="notif-successful-purchase"></label>
                              </div>
                              <div className="clearfix"></div>
                              <p className="p-info">
                                When you successfully buy an item.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-3">
                        <div className="row wow fadeIn">
                          <div className="col-md-6 mb-sm-30">
                            <h5>Language</h5>
                            <p className="p-info">
                              Select your prefered language.
                            </p>
                            <div
                              id="select_lang"
                              className="dropdown fullwidth"
                            >
                              <a href="/" className="btn-selector">
                                English
                              </a>
                              <ul>
                                <li className="active">
                                  <span>English</span>
                                </li>
                                <li>
                                  <span>France</span>
                                </li>
                                <li>
                                  <span>German</span>
                                </li>
                                <li>
                                  <span>Japan</span>
                                </li>
                                <li>
                                  <span>Italy</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>Scheme</h5>
                            <p className="p-info">
                              Customize how Gigaland looks for you.
                            </p>
                            <div
                              id="select_scheme"
                              className="dropdown fullwidth"
                            >
                              <a href="/" className="btn-selector">
                                Default scheme
                              </a>
                              <ul>
                                <li className="active">
                                  <span>Default scheme</span>
                                </li>
                                <li>
                                  <span>Light scheme</span>
                                </li>
                                <li>
                                  <span>Dark scheme</span>
                                </li>
                                <li>
                                  <span>Grey scheme</span>
                                </li>
                                <li>
                                  <span>Retro scheme</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-30"></div>
                  <input
                    type="button"
                    id="submit"
                    className="btn-main"
                    value="Update profile"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a href="/" id="back-to-top"></a>
      <Footer />
    </div>
  );
}

export default Profile;
