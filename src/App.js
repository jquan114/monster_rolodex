import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box.component";

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
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  //render//
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <SearchBox 
        className='monsters search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monster' 
        />
       
        <CardList monsters={filterMonsters } />
      </div>
    );
  }
}

export default App;
