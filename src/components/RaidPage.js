import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default class RaidPage extends Component {
  render() {
    return (
      <div>
          
        <div>
          <Card>
            <CardImg src="Anthem2.gif" alt="Anthem2-gif" />
            <CardBody>
              <CardTitle>Welcome to Anthem playercard creator!</CardTitle>

              <CardText>
                Click the Create button below or in the top right hand corner to
                begin.
              </CardText>
              <a href="/create">
                <Button> Create New </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
