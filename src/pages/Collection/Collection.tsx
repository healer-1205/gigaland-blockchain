import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ScrollToTop } from "../../components/ScrollToTop"
import { Images } from "../../assets"
import { NftCard } from "../../components/NFTCard"
import "./Collection.scss"

export const Collection: React.FC = () => {
  return (
    <div className="collection pt-60">
      <Container className="pt-60">
        <Row>
          <Col sm={12} lg={6}>
            <Row>
              <Col>
                <img src={Images.NFT1} alt="NFT1" className="new_coll_img" />
              </Col>
            </Row>
            <Row className="pt-30">
              <Col>
                <div className="properties">
                  <div className="property_tilte">
                    <span className="grey-color">Item Properties</span>
                    <span className="grey-color">
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
                      &nbsp;&nbsp;5,296 / 7,777
                    </span>
                  </div>
                  <Row className="pt-30">
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                    <Col md={4} className="pt-10">
                      <div className="property_info">
                        <span className="property_info_title grey-color">Background</span>
                        <span className="property_info_name">Yellow Split</span>
                        <span className="property_info_title grey-color">(4.72%)</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={6}>
            <Row>
              <Col>
                <a className="name_link" href="https://www.topaz.so/collection/Aptos-Monkeys-f932dcb983">
                  Aptos Monkeys
                </a>
              </Col>
            </Row>
            <Row className="pt-10">
              <Col>
                <div className="d-flex align-items-center">
                  <span className="grey-color font-12">Floor Price&nbsp;&nbsp;</span>
                  <svg
                    data-name="Icon Logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    fill="white"
                    className="collection_svgIcon"
                  >
                    <path d="M46.47,20.07H41.16a2.15,2.15,0,0,1-1.61-.72l-2.16-2.42a1.69,1.69,0,0,0-2.53,0L33,19a3.21,3.21,0,0,1-2.39,1.07h-29A30.26,30.26,0,0,0,0,27.48H27.42a1.78,1.78,0,0,0,1.28-.54l2.56-2.66a1.67,1.67,0,0,1,1.22-.52h.1a1.7,1.7,0,0,1,1.27.57L36,26.75a2.17,2.17,0,0,0,1.61.73H60a30.26,30.26,0,0,0-1.58-7.41h-12Z"></path>
                    <path d="M16.6,43.05a1.78,1.78,0,0,0,1.27-.54l2.56-2.66a1.7,1.7,0,0,1,1.22-.52h.1A1.7,1.7,0,0,1,23,39.9l2.15,2.42a2.14,2.14,0,0,0,1.62.73H57.12a29.73,29.73,0,0,0,2.47-7.48H30.47a2.17,2.17,0,0,1-1.62-.72L26.7,32.42a1.69,1.69,0,0,0-2.53,0L22.32,34.5a3.18,3.18,0,0,1-2.38,1.07H.41a29.73,29.73,0,0,0,2.47,7.48Z"></path>
                    <path d="M38.12,12a1.74,1.74,0,0,0,1.27-.54L42,8.78a1.69,1.69,0,0,1,1.22-.51h.1a1.69,1.69,0,0,1,1.27.56l2.15,2.43a2.17,2.17,0,0,0,1.62.72h5.77A30.19,30.19,0,0,0,5.92,12Z"></path>
                    <path d="M26.53,50.46H18.64A2.17,2.17,0,0,1,17,49.74l-2.15-2.43a1.71,1.71,0,0,0-2.53,0l-1.85,2.08a3.18,3.18,0,0,1-2.38,1.07H8a30.16,30.16,0,0,0,44,0Z"></path>
                  </svg>
                  <span className="grey-color font-12">&nbsp;&nbsp;19.9</span>
                </div>
              </Col>
            </Row>
            <Row className="pt-30 pb-30">
              <Col>
                <span className="collection_title">AptosMonkeys #</span>
              </Col>
            </Row>
            <Row className="pb-30">
              <Col>
                <span className="grey-color font-12">Owned by 0x00...ebf7</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="info_container">
                  <p className="grey-color">Current Price</p>
                  <div className="d-flex align-items-center">
                    <svg
                      data-name="Icon Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      fill="white"
                      className="title_svgIcon"
                    >
                      <path d="M46.47,20.07H41.16a2.15,2.15,0,0,1-1.61-.72l-2.16-2.42a1.69,1.69,0,0,0-2.53,0L33,19a3.21,3.21,0,0,1-2.39,1.07h-29A30.26,30.26,0,0,0,0,27.48H27.42a1.78,1.78,0,0,0,1.28-.54l2.56-2.66a1.67,1.67,0,0,1,1.22-.52h.1a1.7,1.7,0,0,1,1.27.57L36,26.75a2.17,2.17,0,0,0,1.61.73H60a30.26,30.26,0,0,0-1.58-7.41h-12Z"></path>
                      <path d="M16.6,43.05a1.78,1.78,0,0,0,1.27-.54l2.56-2.66a1.7,1.7,0,0,1,1.22-.52h.1A1.7,1.7,0,0,1,23,39.9l2.15,2.42a2.14,2.14,0,0,0,1.62.73H57.12a29.73,29.73,0,0,0,2.47-7.48H30.47a2.17,2.17,0,0,1-1.62-.72L26.7,32.42a1.69,1.69,0,0,0-2.53,0L22.32,34.5a3.18,3.18,0,0,1-2.38,1.07H.41a29.73,29.73,0,0,0,2.47,7.48Z"></path>
                      <path d="M38.12,12a1.74,1.74,0,0,0,1.27-.54L42,8.78a1.69,1.69,0,0,1,1.22-.51h.1a1.69,1.69,0,0,1,1.27.56l2.15,2.43a2.17,2.17,0,0,0,1.62.72h5.77A30.19,30.19,0,0,0,5.92,12Z"></path>
                      <path d="M26.53,50.46H18.64A2.17,2.17,0,0,1,17,49.74l-2.15-2.43a1.71,1.71,0,0,0-2.53,0l-1.85,2.08a3.18,3.18,0,0,1-2.38,1.07H8a30.16,30.16,0,0,0,44,0Z"></path>
                    </svg>
                    <span className="grey-color font-30">&nbsp;&nbsp;25.5 APT</span>
                  </div>
                  <div className="pt-30 pb-30 d-flex justify-content-around">
                    <div className="connect_btn">
                      <div className="btn_container">
                        <div className="flex-shrink-0 whitespace-nowrap">Buy Now</div>
                      </div>
                    </div>
                    <div className="connect_btn">
                      <div className="btn_container">
                        <div className="flex-shrink-0 whitespace-nowrap">Make Offer</div>
                      </div>
                    </div>
                  </div>
                  <p className="grey-color font-12">5% Creator Royalty</p>
                  <p className="grey-color font-12">2.5% Marketplace Fee</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-30">
              <Col>
                <div className="li_container">
                  <div className="li_container__title py-3">Offers</div>
                  <ul className="li_container__ul">
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="pt-30">
              <Col>
                <div className="li_container">
                  <div className="li_container__title py-3">Collection Offers</div>
                  <ul className="li_container__ul">
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="pt-30">
              <Col>
                <div className="li_container">
                  <div className="li_container__title py-3">Latest Activity</div>
                  <ul className="li_container__ul">
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                    <li className="li_container__ul__li py-4 px-3">
                      <div className="d-flex justify-content-between align-items-center flex-row itestextsx">
                        <a
                          className="underline"
                          href="https://www.topaz.so/u/0x2e4952ae81d6f7f31fcddad33c32ed6c2c06e453cf3501e87f9bbbe2527ba366"
                        >
                          0x2e49...7ba366
                        </a>
                        <div>
                          <div>
                            Expires in <span> 23h 31m 16s</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-row pt-10">
                        <div>
                          <div className="d-flex flex-row align-items-center gap-2 content__1">
                            <div className="content__2">
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
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="pt-60 pb-60">
        <Row>
          <Col>
            <p className="font-30">More from this collection</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <NftCard nft={Images.NFT3} />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <NftCard nft={Images.NFT4} />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <NftCard nft={Images.NFT5} />
          </Col>
          <Col sm={12} md={3} lg={3}>
            <NftCard nft={Images.NFT6} />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  )
}
