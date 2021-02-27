import React, { Component } from "react";
// import "../assest/Css/WeatherAPI.css";
import {WiDayCloudyWindy} from "react-icons/wi";
const key = "602d7d33ca42b5a47e216dd14db8d1f5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
export default class ProfilePage extends Component {
  state = {
    locationName: "",
    temp: 0,
    icon: "",
    
  };

  componentDidMount() {
    fetch(`${apiURL}q=Amman&appid=${key}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          locationName: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
        });
      })
  }

  render() {
    let temp = Math.round(this.state.temp - 273.15);
    return (
     <>
        <WiDayCloudyWindy size={30}/>  <span  style={{color:"#ec9532"}}> {this.state.locationName} </span>
    <span className="flex-c">
      <span  style={{color:"#ec9532"}}>{temp} °C</span>
    </span>
       
    </>
  
    );
  }
}