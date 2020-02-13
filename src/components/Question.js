import React from "react";
import '../components/Question.css'


class Question extends React.Component {
    handleClick = (answer) => {
        this.props.qAnsweredFunc(this.props.id, answer);
    };

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <p className="question">{this.props.question}</p>
                </div>
                <div className="col-12">
                    {this.props.options.map(answer => {
                        return (
                            <div className="row">
                                <div className="col-12">
                                <button className="optionButton" onClick={() => {this.handleClick(answer) }}>
                                        {answer}
                                    </button>
                                </div>
                            </div >
                        );
                    })
                    }
                    <div className="col-12">
                        <button
                            className="nextButton">
                            Back
                      </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;

