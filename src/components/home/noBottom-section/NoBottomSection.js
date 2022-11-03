import React from "react";

function NoBottomSection() {
  return (
    <section aria-label="section" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/1.png" alt="" className="mb20" />
                <h4>Metamask</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/2.png" alt="" className="mb20" />
                <h4>Bitski</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/3.png" alt="" className="mb20" />
                <h4>Fortmatic</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/4.png" alt="" className="mb20" />
                <h4>WalletConnect</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/5.png" alt="" className="mb20" />
                <h4>Coinbase Wallet</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 mb30 ">
            <a className="box-url style-2 " href="/">
              <div className="box-url-inner wallet">
                <img src="images/wallet/6.png" alt="" className="mb20" />
                <h4>Arkane</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoBottomSection;
