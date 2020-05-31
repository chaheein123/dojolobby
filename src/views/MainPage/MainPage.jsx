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

  componentDidMount(){

  }

  render() {
    return (
      <div className="MainPage">
        {/* <Container>
          <Row md={2} sm={1}>
            <Col lg={{span:3, order:1}} md={{order:1,span:4}} sm={{order:2}} className="main-left-wrapper">
              <MainLeftPage />
            </Col>
            <Col lg={{span:3, order:12}} md={{order:3, span:4}} sm={{order:3}} className="main-right-wrapper">
              <MainRightPage />
            </Col>
            <Col lg={{span:6, order:6}} md={{order:2, span:8}} sm={{order:1}} className="main-middle-wrapper">
              <MainMiddlePage/>
            </Col>
          </Row>
        </Container> */}
        <MainLeftPage />
        <MainMiddlePage />
        <MainRightPage />
      </div>
    )
  };
};