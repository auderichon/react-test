import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Temperature extends Component {
  state = {
    size: "",
    url: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div className="CustomImg ContentMain">
        <input
          type="text"
          name="url"
          id="url"
          placeholder=""
          onChange={this.handleChange}
        />
        <input
          type="range"
          name="size"
          id="size"
          min="0"
          max="200"
          onChange={this.handleChange}
        />

        {this.state.size && (
          <p>
            {this.state.size} x {this.state.size} px
          </p>
        )}
        {this.state.url && (
          <img
            src={this.state.url}
            alt=""
            width={this.state.size}
            height={this.state.size}
          />
        )}
      </div>
    );
  }
}
export default withRouter(Temperature);
