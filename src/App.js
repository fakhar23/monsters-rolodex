import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-componenet";
import SearchBox from "./components/search-box/search-box-componenet";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (e) => {
    const searchField = e.target.value;
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render app js");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((value, index, array) => {
      return value.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster-Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          placeholder="random placeholder"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
