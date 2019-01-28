import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { gql } from "apollo-boost";
// import { DRAFTS_QUERY } from "./DraftsPage";
import { Button } from "reactstrap";

class CreatePage extends Component {
  state = {
    Gamertag: "",
    Javelin: "",
    Avatar: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state });
    fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application.json"
      }
    });
  };
  // class Avatar is CSS styling. name Javelin so you can only pick one. Value =

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <img src="Anthem_Logo.png" alt="anthem" />

          <h2>Create your player card</h2>

          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ Gamertag: e.target.value })}
            placeholder="Gamertag"
            type="text"
            value={this.state.title}
          />

          <div class="container">
            <form action="">
              <label>
                <input
                  type="radio"
                  name="Javelin"
                  value="Colossus"
                  onChange={e => this.setState({ Javelin: e.target.value })}
                />
                Colossus
                <img
                  class="Avatar"
                  src="Colossus-Avatar.jpg"
                  alt="Colossus"
                  width="250"
                  height="250"
                />
              </label>

              <label class="radio">
                <input
                  type="radio"
                  name="Javelin"
                  value="Storm"
                  onChange={e => this.setState({ Javelin: e.target.value })}
                />
                Storm
                <img
                  class="Avatar"
                  src="Storm-Avatar.jpg"
                  alt="Storm"
                  width="250"
                  height="250"
                />
              </label>

              <br />

              <label class="radio">
                <input
                  type="radio"
                  name="Javelin"
                  value="Ranger"
                  onChange={e => this.setState({ Javelin: e.target.value })}
                />
                Ranger
                <img
                  class="Avatar"
                  src="Ranger-Avatar.jpg"
                  alt="Ranger"
                  width="250"
                  height="250"
                />
              </label>

              <label class="radio">
                <input
                  type="radio"
                  name="Javelin"
                  value="Interceptor"
                  onChange={e => this.setState({ Javelin: e.target.value })}
                />
                Interceptor
                <img
                  class="Avatar"
                  src="Interceptor-Avatar.jpg"
                  alt="Interceptor"
                  width="250"
                  height="250"
                />
              </label>
            </form>
          </div>
          <br />
          <Button color="primary" type="submit">
            Submit
          </Button>
          <a className="f6 pointer" onClick={this.props.history.goBack}>
            or cancel
          </a>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePage);
