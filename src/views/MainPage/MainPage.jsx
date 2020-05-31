import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MainLeftPage} from "./MainLeftPage/MainLeftPage";
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
        <Container>
          <Row>
            <Col md={4}>
              <MainLeftPage />
            </Col>
            <Col md={8}>
              <MainMiddlePage/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
};