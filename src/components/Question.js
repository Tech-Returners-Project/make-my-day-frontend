import React from "react";
import '../components/Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';


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
              <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ paddingTop: 10 }} size='3x'
                onClick={() => { this.handleBack() }} />
            </div>

            <div className="col-6 refreshButton">
              <FontAwesomeIcon icon={faSync} style={{ paddingTop: 10 }} size='3x'
                onClick={() => { this.handleRefresh() }} />
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Question;

