import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Autoplay, EffectCoverflow } from "swiper"
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Images } from "../../assets"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/effect-coverflow"
import "swiper/swiper.min.css"
import "swiper/modules/free-mode/free-mode.min.css"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/thumbs/thumbs.min.css"
import "./Collection.scss"

export const Collection: React.FC = () => {
  return (
    <div id="section">
      <Container>
        <Row>
          <Col>
            <div className="text-center pt-30">
              <span>Hot Collections</span>
              <div className="small-border"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="swiperConrainer">
            <Swiper
              modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
              navigation={true}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  spaceBetween: 25,
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll1} className="lazy img-fluid" alt="Coll1" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author1} className="lazy pp-coll" alt="Author1" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Abstraction</h4>
                    </a>
                    <span>ERC-192</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll2} className="lazy img-fluid" alt="Coll2" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author2} className="lazy pp-coll" alt="Author2" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Patternlicious</h4>
                    </a>
                    <span>ERC-61</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll3} className="lazy img-fluid" alt="Coll3" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author3} className="lazy pp-coll" alt="Author3" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Skecthify</h4>
                    </a>
                    <span>ERC-126</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll4} className="lazy img-fluid" alt="Coll4" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author4} className="lazy pp-coll" alt="Author4" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Cartoonism</h4>
                    </a>
                    <span>ERC-73</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll5} className="lazy img-fluid" alt="Coll5" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author5} className="lazy pp-coll" alt="Author5" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Virtuland</h4>
                    </a>
                    <span>ERC-85</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img src={Images.Coll6} className="lazy img-fluid" alt="Coll6" />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img src={Images.Author6} className="lazy pp-coll" alt="Author6" />
                    </a>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="nft_coll_info">
                    <a href="/explore">
                      <h4>Papercut</h4>
                    </a>
                    <span>ERC-42</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Row>
      </Container>
    </div>
  )
}
