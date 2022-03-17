import React, { PureComponent } from "react";
import List from "./List";
import "../../App.css";

class App extends PureComponent {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: [],
  };

  loadNextPage = (...args) => {
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState((state) => ({
          hasNextPage: state.items.length < 100,
          isNextPageLoading: false,
          items: [...state.items].concat(
            new Array(10).fill(true).map(() => ({
              name: "user" + Math.floor(Math.random() * (1000 - 100) + 100),
            }))
          ),
        }));
      }, 2500);
    });
  };

  render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;

    return (
      <>
        <div className="listContainer">
          <p className="Note">User List</p>
          <List
            hasNextPage={hasNextPage}
            isNextPageLoading={isNextPageLoading}
            items={items}
            loadNextPage={this.loadNextPage}
          />
        </div>
      </>
    );
  }
}

export default App;
