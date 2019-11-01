import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function Profile() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">FRONTEND DEVELOPER</h2>
              <br />
              <p className="description">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
     
                <i className="nc-icon nc-html5" />
                <i className="nc-icon nc-mobile" />
                <i className="nc-icon nc-app" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-headphones" />
                <i className="nc-icon nc-laptop" />
                <i className="nc-icon nc-note-03" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-time-alarm" />
                {/* <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" /> */}
                {/* <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" /> */}
                {/* <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Profile;
