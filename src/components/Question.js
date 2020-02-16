import React from "react";
import '../components/Question.css'


class Question extends React.Component {
  handleClick = (answer) => {
    this.props.qAnsweredFunc(this.props.id, answer);
  };

  handleBack = () => {
    this.props.backButtonFunc(this.props.id);
  }

  handleRefresh = () => {
    this.props.refreshButtonFunc();
  }

  render() {
    return (
      <div className="row">

        <div className="col-12 questionFormat">
          <p className="question">{this.props.question}</p>
        </div>

        <div className="col-12">
          {this.props.options.map(option => {
            return (
              <div key={option.text} className="row questionRow">

                <div className="col-6 text-right">
                  <button className="optionButton"
                    onClick={() => { this.handleClick(option.text) }}>
                    {option.text}
                  </button>
                </div>

                <div className="col-6 text-left">
                  <img className="optionImage"
                    src={'/images/' + option.image}
                    alt=""
                  />
                </div>

              </div >
            )
          })}

          <div className="row">
            <div className="col-6 backButton">
              <button className="backRefreshButton"
                onClick={() => { this.handleBack() }}>
                Back
              </button>
            </div>

            <div className="col-6 refreshButton">
              <button className="backRefreshButton"
                onClick={() => { this.handleRefresh() }}>
                Restart
              </button>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Question;

