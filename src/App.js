import React from 'react';
import 'moment-timezone';
import './App.css';
import moment from 'moment-timezone';
import Question from "./components/Question.js";
import Header from "./components/Header.js";


class App extends React.Component {
  state = {
    questions: [
      {
        id: 1,
        question: "Where do you want to be?",
        answered: false,
        options: ['Indoor', 'Outdoor']
      },
      {
        id: 2,
        question: "Which location?",
        answered: false,
        options: ['Manchester', 'Liverpool']
      },
      {
        id: 3,
        question: "Who are you going with?",
        answered: false,
        options: ['Alone', 'As a Couple', 'With Kids', 'As a Group']
      },
      {
        id: 4,
        question: "How energetic are you feeling?",
        answered: false,
        options: ['Low Key', 'Quite Energetic', 'Extremely Energetic']
      },
      {
        id: 5,
        question: "How much do you want to spend?",
        answered: false,
        options: ['Nothing', '£', '££', '£££']
      }
    ],
    activities: []
  };

  qAnswered = (id, answer) => {
    console.log(answer)
    const revisedOptions = this.state.questions.map(question => {
      if (question.id === id) {
        const updatedQ = { ...question, answer }
        return updatedQ
      }
      return question
    })
    this.setState({
      questions: revisedOptions
    })
  }

  render() {
    const remainingQuestions = this.state.questions.filter(question => !question.answer)
  
  return(
      <div className = "App" >
      <Header />
      <p>{moment().format("Do-MMM-YYYY")}</p>

      <Question
        question={remainingQuestions[0].question}
        options={remainingQuestions[0].options}
        qAnsweredFunc={this.qAnswered}
        id={remainingQuestions[0].id}
      />
      </div>
    )
  }
}



export default App;
