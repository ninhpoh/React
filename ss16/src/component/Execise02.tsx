import { Component } from "react";

interface State {
  isLoggedIn: boolean;
}

export default class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{textAlign: "center"}}>
        <h2>
          {isLoggedIn
            ? "Xin chào, User!"
            : "Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}