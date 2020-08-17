import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Temperature extends Component {
  state = {
    temperature: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ temperature: value });
  };

  render() {
    return (
      <div className="Temperature ContentMain">
        <input
          type="number"
          name="temperature"
          id="temperature"
          placeholder="Temperature in °C"
          onChange={this.handleChange}
        />

        {this.state.temperature && this.state.temperature < 10 && (
          <p class="blue">
            It's cold{" "}
            <span role="img" aria-label="emoji-snow">
              ❄️
            </span>
          </p>
        )}

        {this.state.temperature >= 10 && this.state.temperature <= 30 && (
          <p>
            It's nice{" "}
            <span role="img" aria-label="emoji-flower">
              🌼
            </span>
          </p>
        )}

        {this.state.temperature > 30 && (
          <p class="red">
            It's warm{" "}
            <span role="img" aria-label="emoji-sun">
              ☀️
            </span>
          </p>
        )}
      </div>
    );
  }
}
export default withRouter(Temperature);
