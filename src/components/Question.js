import React from "react";
import '../components/Question.css'


class Question extends React.Component {

    // Need to change state of answered to true onClick
    // handleClick = () => {
    //     this.props.""(this.props.id)
    // }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="question">{this.props.question}</p>
                </div>
                <div className="col-12 col-sm-6">
                    {this.props.options.map(q => {
                        return (
                            <button type="select" options={q.options}>
                                {q}
                            </button>
                        );
                    })
                    }
                </div>
            </div >
        )
    }
}

export default Question;

