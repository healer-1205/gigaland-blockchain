import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Collection.scss"

export const Collection: React.FC = () => {
  return (
    <div className="collection pt-60">
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <Row>
              <Col></Col>
            </Row>
          </Col>
          <Col sm={12} lg={6}></Col>
        </Row>
      </Container>
    </div>
  )
}
