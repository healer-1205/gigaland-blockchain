import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Images } from "../../assets"
import "./ProfileCard.scss"

export const ProfileCard: React.FC = () => {
  return (
    <div className="nft_item">
      <div className="de_countdown" data-year="2022" data-month="9" data-day="16" data-hour="8"></div>
      <div className="author_list_pp">
        <Link to="/">
          <img className="lazy" src={Images.Author1} alt="Author1" />
          <FontAwesomeIcon icon={faCheck} />
        </Link>
      </div>
      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <button onClick={() => {}}>Buy Now</button>
            <div className="nft__item_share">
              <h4>Share</h4>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
        <Link to="/collection">
          <img src={Images.Coll1} className="lazy nft__item_preview" alt="Coll1" />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to="/collection">
          <h4>Abstraction /256</h4>
        </Link>
        <div className="nft__item_click">
          <span></span>
        </div>
        <div className="nft__item_price">
          0.08 ETH<span>1/20</span>
        </div>
        <div className="nft__item_action">
          <Link to="/">Place a bid</Link>
        </div>
        <div className="nft__item_like">
          <FontAwesomeIcon icon={faHeart} />
          <span>50</span>
        </div>
      </div>
    </div>
  )
}
