import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { DRAFTS_QUERY } from "./DraftsPage";

class CreatePage extends Component {
  state = {
    Gamertag: "",
    Javelin: ""
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

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
          <img src="Anthem_Logo.png" alt="anthem" />

          <h2>Create your player card</h2>

          <input autoFocus className="w-100 pa2 mv2 br2 b--black-20 bw1" onChange={e => this.setState(
                { title: e.target.value }
              )} placeholder="Gamertag" type="text" value={this.state.title} />

          <div class="container">
            <form action="">
              <label>
                <input type="radio" name="Javelin" onChange={e => this.setState(
                      { Javelin: e.target.value }
                    )} />
                Colossus
                <img class="Avatar" src="Colossus-Avatar.jpg" alt="Colossus" width="250" height="250" />
              </label>

              <label class="radio">
                <input type="radio" name="Javelin" onChange={e => this.setState(
                      { Javelin: e.target.value }
                    )} />
                Storm
                <img class="Avatar" src="Storm-Avatar.jpg" alt="Storm" width="250" height="250" />
              </label>
              <br />
              <label class="radio">
                <input type="radio" name="Javelin" onChange={e => this.setState(
                      { Javelin: e.target.value }
                    )} />
                Ranger
                <img class="Avatar" src="Ranger-Avatar.jpg" alt="Ranger" width="250" height="250" />
              </label>

              <label class="radio">
                <input type="radio" name="Javelin" onChange={e => this.setState(
                      { Javelin: e.target.value }
                    )} />
                Interceptor
                <img class="Avatar" src="Interceptor-Avatar.jpg" alt="Interceptor" width="250" height="250" />
              </label>
            </form>
          </div>
<br></br>
          <input className={`pa3 bg-black-10 bn ${this.state.content && this.state.title && "dim pointer"}`} type="submit" value="Submit" />

          <a className="f6 pointer" onClick={this.props.history.goBack}>
            or cancel
          </a>
        </form>
      </div>;
  }
}


export default withRouter(CreatePage);
