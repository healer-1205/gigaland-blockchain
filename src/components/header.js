<header className="transparent scroll-dark">
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
            <div id="item_category" className="dropdown">
              <a href="/" className="btn-selector">
                All categories
              </a>
              <ul>
                <li className="active">
                  <span>All categories</span>
                </li>
                {chain.map((oneChain) => {
                  return (
                    <li
                      key={oneChain.id}
                      onClick={() => {
                        console.log(oneChain.img);
                      }}
                    >
                      <span>{oneChain.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="de-flex-col">
              <input
                id="quick_search"
                className="xs-hide style-2"
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
                {/* <span onClick={open1}></span> */}
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
                {/* <span onClick={open1}></span> */}
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
                {/* <span onClick={open1}></span> */}
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
                {/* <span onClick={open1}></span> */}
                <ul>
                  <li>
                    <a href="/">Activity</a>
                  </li>
                  <li>
                    <a href="/">Rankings</a>
                  </li>
                </ul>
              </li>
              <span href="/" id="switch_scheme">
                <i className="ss_dark fa fa-moon-o"></i>
                <i className="ss_light fa fa-sun-o"></i>
              </span>
            </ul>
            <div className="menu_side_area">
              <a href="/" className="btn-main btn-wallet">
                <i className="icon_wallet_alt"></i>
                <span>Connect Wallet</span>
              </a>
              <span id="menu-btn" onClick={open}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>;