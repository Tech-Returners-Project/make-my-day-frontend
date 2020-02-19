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
    axios.get(`https://j18snr1khd.execute-api.eu-west-1.amazonaws.com/dev/activities?Location=${this.props.questions[1].answer}&Place=${this.props.questions[0].answer}&People=${this.props.questions[2].answer}&Price=${this.props.questions[4].answer}&Activity_Level=${this.props.questions[3].answer}`).then((response) => {
      const activities = response.data.highestScoringItem;
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
        <h1>{this.state.Activities.activity}</h1><br></br>
        <div className="row">
          <div className="col-12 sm-6">
            <img src={this.state.Activities.image} Alt={this.state.Activities.activity} className="photo img-fluid" />
          </div>
          <div className="col-12 sm-6">
            <p>{this.state.Activities.Description}</p>
            <h3>Here are some links for your activity:</h3>
            <p>
              <a href={this.state.Activities.Link_1}>{this.state.Activities.Link_1}</a><br></br>
              <a href={this.state.Activities.Link_2}>{this.state.Activities.Link_2}</a><br></br>
              <a href={this.state.Activities.Link_3}>{this.state.Activities.Link_3}</a><br></br>
            </p>
          </div>
          <div className="col-12 sm-12">
            <button className="backRefreshButton"
              onClick={() => { this.handleRefresh() }}>
              Click to restart all questions
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;

