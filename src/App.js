import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

export default class App extends React.Component {
  state = {
    y: 0
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(({ y }) => ({
        y: y === -96 ? 0 : y - 48
      }));
    }, 1500);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  render() {
    const { y } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div>
            <span>Make Data</span>
            <div className="app-features">
              <div
                className="app-features-inner"
                style={{
                  transform: `translate3d(0, ${y}px, 0)`
                }}
              >
                <span>Visible</span>
                <span>Readable</span>
                <span>Programmable</span>
              </div>
            </div>
            <span>For Programmers</span>
          </div>
        </header>
      </div>
    );
  }
}
