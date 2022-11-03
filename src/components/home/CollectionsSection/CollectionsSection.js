import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function CollectionsSection() {
  return (
    <section id="section-collections" className="pt30 pb30">
      <div className="container">
        <div className="spacer-double"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="swiperConrainer">
            <Swiper
              modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
              navigation={true}
              loop={true}
              // effect={"coverflow"}
              // centeredSlides={true}
              // coverflowEffect={{
              //   rotate: 50,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 1,
              //   slideShadows: true,
              // }}
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
              // autoplay={{ delay: 4000 }}
            >
              <SwiperSlide>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <a href="/explore">
                      <img
                        src="images/collections/coll-1.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-1.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
                      <img
                        src="images/collections/coll-2.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-2.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
                      <img
                        src="images/collections/coll-3.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-3.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
                      <img
                        src="images/collections/coll-4.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-4.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
                      <img
                        src="images/collections/coll-5.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-5.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
                      <img
                        src="images/collections/coll-6.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft_coll_pp">
                    <a href="/explore">
                      <img
                        className="lazy pp-coll"
                        src="images/author/author-6.jpg"
                        alt=""
                      />
                    </a>
                    <i className="fa fa-check"></i>
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
        </div>
        <div className="spacer-double"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-6 ">
            <h2>New Auctions</h2>
            <ol className="author_list">
              <li>
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
                <div className="author_list_info">
                  <a href="/">Monica Lucas</a>
                  <span>3.2 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-2.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Mamie Barnett</a>
                  <span>2.8 ETH</span>
                </div>
              </li>
              {/* </div> */}
              {/* <div className="roww"> */}{" "}
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-3.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Monica Lucas</a>
                  <span>2.5 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-4.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Mamie Barnett</a>
                  <span>2.2 ETH</span>
                </div>
              </li>
              {/* </div> */}
            </ol>
          </div>
          <div className="col-md-6 ">
            <h2>Reacently Sold</h2>
            <ol className="author_list">
              {/* <div className="roww"> */}
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-5.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Jimmy Wright</a>
                  <span>1.9 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-6.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Karla Sharp</a>
                  <span>1.6 ETH</span>
                </div>
              </li>
              {/* </div> */}
              {/* <div className="roww"> */}
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-7.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Gayle Hicks</a>
                  <span>1.5 ETH</span>
                </div>
              </li>
              <li>
                <div className="author_list_pp">
                  <a href="/">
                    <img
                      className="lazy"
                      src="images/author/author-12.jpg"
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </a>
                </div>
                <div className="author_list_info">
                  <a href="/">Fred Ryan</a>
                  <span>0.5 eth</span>
                </div>
              </li>
              {/* </div> */}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionsSection;
