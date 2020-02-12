import React from "react";
import '../components/Question.css'


class Question extends React.Component {
    handleClick = (answer) => {
        this.props.qAnsweredFunc(this.props.id, answer);
    };

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="question">{this.props.question}</p>
                </div>
                <div className="col-12 col-sm-6">
                    {this.props.options.map(answer => {
                        return (
                            <button type="button" onClick={() => { this.handleClick(answer) }}>
                                {answer}
                            </button>
                        );
                    })
                    }
                    <div className="col-12 col-sm-12">
                        <button type="submit" onClick={this.handleClick}>
                            Back
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default Question;

