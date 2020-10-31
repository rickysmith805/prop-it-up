import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Jane: {
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black",
      },
      John: {
        firstName: "John",
        lastName: "Smith",
        age: 88,
        hairColor: "Brown",
      },
      Millard: {
        firstName: "Millard",
        lastName: "Fillmore",
        age: 50,
        hairColor: "Brown",
      },
      Maria: {
        firstName: "Maria",
        lastName: "Smith",
        age: 52,
        hairColor: "Brown",
      }
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-around">
        <PersonCard
          person={this.state.Jane}
        />
        <PersonCard
          person={this.state.John}
        />
        <PersonCard
          person={this.state.Millard}
        />
        <PersonCard
          person={this.state.Maria}
        />

      </div>
    );
  }
}

export default App;
