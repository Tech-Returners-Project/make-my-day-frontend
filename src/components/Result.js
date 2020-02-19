import React from "react";
import Cinema from "./cinema.png";
import "./Result.css";
import axios from "axios"


class Result extends React.Component {

  state = {
    Activities: []
  };
  handleRefresh = () => {
    this.props.refreshButtonFunc();
  }

  componentDidMount() {
    axios.get(`https://j18snr1khd.execute-api.eu-west-1.amazonaws.com/dev/activities/?%Location={this.props.questions[1].answer}&Place={this.props.questions[0].answer}&People={this.props.questions[2].answer&Price={this.props.questions[4].answer&Activity_Level={this.props.questions[3].answer`).then((response) => {
      const activities = response.data.activities;
      this.setState({
        Activities: activities
      })
    })
      .catch((err) => {
        console.log(err);
      });

  }
  render() {
    return (
      <div>
        <h1>Your Activity Is...</h1><br></br>
        <h1>CINEMA</h1><br></br>
        <div className="row">
          <div className="col-6 sm-6">
            <img src={Cinema} alt="Cinema" className="photo img-fluid" />
          </div>
          <div className="col-6 sm-6">
            <p>Relax and unwind while watching a film, make sure to buy plenty of snacks!</p>
            <h3>Your local cinemas are:</h3>
            <a href="https://www.myvue.com/cinema/manchester-printworks/whats-on">VUE Cinema Printworks</a><br></br>
            <a href="https://www.odeon.co.uk/cinemas/manchester_great_northern/225/">ODEON Cinema Manchester</a><br></br>
            <a href="https://homemcr.org/cinema/">HOME Cinema Manchester</a><br></br>
          </div>
          <button className="backRefreshButton"
            onClick={() => { this.handleRefresh() }}>
            Click to restart all questions
              </button>
        </div>
      </div>
    );
  }
}

export default Result;