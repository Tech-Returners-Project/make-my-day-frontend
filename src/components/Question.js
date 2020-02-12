import React from "react";
import '../components/Question.css'


class Question extends React.Component {
     handleClick = () => {
         console.log("clicked")
    this.props.qAnsweredFunc(this.props.id);
  };

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
                    <div className="col-12 col-sm-12">
                        <button type="submit" onClick={this.handleClick}>
                            Next
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default Question;

