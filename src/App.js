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
        options: [
          {
            text: 'Indoor',
            image: 'indoor.png'
          },
          {
            text: 'Outdoor',
            image: 'outdoor.png'
          }
        ]
      },

      {
        id: 2,
        question: "Which location?",
        options: [
          {
            text: 'Manchester',
            image: 'manchester.png'
          },
          {
            text: 'Liverpool',
            image: 'liverpool.png'
          }
        ]
      },

      {
        id: 3,
        question: "Who are you going with?",
        options: [
          {
            text: 'Alone',
            image: 'alone.png'
          },
          {
            text: 'As a Couple',
            image: 'couple.png'
          },
          {
            text: 'With Kids',
            image: 'kids.png'
          },
          {
            text: 'As a Group',
            image: 'group.png'
          }
        ]
      },

      {
        id: 4,
        question: "How energetic are you feeling?",
        options: [
          {
            text: 'Low Key',
            image: 'low_key.png'
          },
          {
            text: 'Quite Energetic',
            image: 'quite_energetic.png'
          },
          {
            text: 'Extremely Energetic',
            image: 'extremely_energetic.png'
          }
        ]
      },

      {
        id: 5,
        question: "How much do you want to spend?",
        options: [
          {
            text: 'Nothing',
            image: 'nothing.png'
          },
          {
            text: '£',
            image: 'one_pound.png'
          },
          {
            text: '££',
            image: 'two_pound.png'
          },
          {
            text: '£££',
            image: 'three_pound.png'
          }
        ]
      }
    ],
  };

  qAnswered = (id, answer) => {
    console.log(answer)
    const revisedQuestions = this.state.questions.map(question => {
      if (question.id === id) {
        const updatedQ = { ...question, answer }
        console.log(updatedQ)
        return updatedQ
      }
      return question
    })
    this.setState({
      questions: revisedQuestions
    })
  }

  backButton = (id) => {
    const newRevisedQuestions = this.state.questions.map(question => {
      if (question.id === id - 1) {
        return { ...question, answer: null }
      }
      return question
    })
    this.setState({
      questions: newRevisedQuestions
    })
  }

  refreshButton = () => {
    const nullAnswers = this.state.questions.map(question => {
      return { ...question, answer: null }
    })
    this.setState({
      questions: nullAnswers
    })
  }




  render() {
    const remainingQuestions = this.state.questions.filter(question => {
      return !question.answer
    })

    return (
      <div className="App" >
        <div className="container">
          <Header />
          <p>Today is the {moment().format("Do-MMM-YYYY")}</p>

          {remainingQuestions.length === 0
            ? <Result />
            :
            <div className="row">
              <div className="col-12">
                <Question
                  question={remainingQuestions[0].question}
                  options={remainingQuestions[0].options}
                  qAnsweredFunc={this.qAnswered}
                  backButtonFunc={this.backButton}
                  refreshButtonFunc={this.refreshButton}
                  id={remainingQuestions[0].id} />
              </div>
            </div>
          }
        </div>
      </div >
    )
  }
}




export default App;
