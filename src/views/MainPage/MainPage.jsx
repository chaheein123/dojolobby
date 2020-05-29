import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MainLeftPage} from "./MainLeftPage/MainLeftPage";
import { MainRightPage } from "./MainRightPage/MainRightPage";
import {MainMiddlePage} from "./MainMiddlePage/MainMiddlePage";

import "./MainPage.scss";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="MainPage">
        <Container fluid>
          <Row>
            <Col md={3}>
              <MainLeftPage />
            </Col>
            <Col md={6}>
              <MainMiddlePage />
            </Col>
            <Col md={3}>
              <MainRightPage />
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
};