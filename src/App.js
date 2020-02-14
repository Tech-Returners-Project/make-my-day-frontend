import React from 'react';
import 'moment-timezone';
import './App.css';
import moment from 'moment-timezone';
import Question from "./components/Question.js";
import Header from "./components/Header.js";
import Result from "./components/Result.js"


class App extends React.Component {
  state = {
    questions: [
      {
        id: 1,
        question: "Where do you want to be?",
        options: ['Indoor', 'Outdoor']
      },
      {
        id: 2,
        question: "Which location?",
        options: ['Manchester', 'Liverpool']
      },
      {
        id: 3,
        question: "Who are you going with?",
        options: ['Alone', 'As a Couple', 'With Kids', 'As a Group']
      },
      {
        id: 4,
        question: "How energetic are you feeling?",
        options: ['Low Key', 'Quite Energetic', 'Extremely Energetic']
      },
      {
        id: 5,
        question: "How much do you want to spend?",
        options: ['Nothing', '£', '££', '£££']
      }
    ],
  };

  qAnswered = (id, answer) => {
    console.log(answer)
    const revisedQuestions = this.state.questions.map(question => {
      if (question.id === id) {
        const updatedQ = { ...question, answer }
        return updatedQ
      }
      return question
    })
    this.setState({
      questions: revisedQuestions
    })
  }

  render() {
    const remainingQuestions = this.state.questions.filter(question => {
      return question.answer === undefined
    })

    return (
      <div className="App" >
        <div className="container">
          <Header />
          <p>Today is: {moment().format("Do-MMM-YYYY")}</p>

          {remainingQuestions.length === 0
            ? <Result />
            :
            <div className="row">
              <div className="col-12">
                <Question
                  question={remainingQuestions[0].question}
                  options={remainingQuestions[0].options}
                  qAnsweredFunc={this.qAnswered}
                  id={remainingQuestions[0].id} />
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}




export default App;
