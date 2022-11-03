import React from "react";

function Modal() {
  return (
    <div
      className="modal fade"
      id="place_a_bid"
      tabIndex="-1"
      aria-labelledby="place_a_bid"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered de-modal">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="p-3 form-border">
              <h3>Place a Bid</h3>
              You are about to place a bid for <b>
                Alien vs Predator
              </b> from <b>Monica Lucas</b>
              <div className="spacer-single"></div>
              <h6>Your bid (ETH)</h6>
              <input
                type="text"
                name="bid_value"
                id="bid_value"
                className="form-control"
                placeholder="Enter bid"
              />
              <div className="spacer-single"></div>
              <h6>
                Enter quantity. <span className="id-color-2">10 available</span>
              </h6>
              <input
                type="text"
                name="bid_qty"
                id="bid_qty"
                className="form-control"
                defaultValue={1}
              />
              <div className="spacer-single"></div>
              <div className="de-flex">
                <div>Your bidding balance</div>
                <div>
                  <b>0.013325 ETH</b>
                </div>
              </div>
              <div className="de-flex">
                <div>Your balance</div>
                <div>
                  <b>10.67856 ETH</b>
                </div>
              </div>
              <div className="de-flex">
                <div>Service fee 2.5%</div>
                <div>
                  <b>0.00325 ETH</b>
                </div>
              </div>
              <div className="de-flex">
                <div>You will pay</div>
                <div>
                  <b>0.013325 ETH</b>
                </div>
              </div>
              <div className="spacer-single"></div>
              <a
                href="03_grey-wallet.html"
                target="_blank"
                className="btn-main btn-fullwidth"
              >
                Place a bid
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
