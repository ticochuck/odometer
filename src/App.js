import React from 'react';
import './App.css';


export default function App() {

  function Header(props) {
    return (
      <header>
        <h1>{props.user}</h1>
      </header>
    )
  }

  function Footer(props) {
    return (
      <footer>
        <span>{props.trademark}</span>
      </footer>
    )
  }

  return (
    <>
      <Header user="O D O M E T E R"/>

      <div className="App">
      </div>
      <Odometer />      
      <Footer trademark="© 2020 Copyright - Chuck Li Villalobos"/>
    </>
  );
}


class Odometer extends React.Component {

  constructor() {
    super();
    this.totalMiles = 0;
    this.laps = 0;
    this.miles = {
      miles : this.totalMiles
    }
  }
  
  addMiles(miles) {
    this.totalMiles += miles
    if (this.totalMiles > 9999) {
      this.totalMiles -= 10000
      this.laps += 1
    };
    this.setState({
      miles : this.test
    })
  }

  resetOdometer(val) {
    this.totalMiles = val
    this.laps = val
    this.setState({
      miles : val
    })
  }

  render() {
    return (
      <>
        <div className="addButtons">
          <button onClick={() => this.addMiles(1000)}>Add 1000</button>
          <button onClick={() => this.addMiles(100)}>Add 100</button>
          <button onClick={() => this.addMiles(10)}>Add 10</button>
          <button onClick={() => this.addMiles(1)}>Add 1</button>
        </div>
        <div className="odometerInfo">
          <h4>Laps: {this.laps}</h4>
          <h2>Miles</h2>
          <h3>{(this.totalMiles.toString().padStart(4, '0'))}</h3>
        </div>
        <div className="resetDiv">
          <button className="reset" onClick={() => this.resetOdometer(0)}>Reset</button>
        </div>

      </>
    )
  }
}