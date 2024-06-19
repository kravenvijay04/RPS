import { useState, useEffect } from "react";

const Game = () => {

  //Initialize useState variables
  var [userChoice, setUserChoice] = useState('rock');
  var [compChoice, setCompChoice] = useState('rock');
  var [userPoint, setUserPoint] = useState(0);
  var [compPoint, setCompPoint] = useState(0);
  var [Result, setResult] = useState(null);
  var [overResult, setOverResult] = useState(null);
  var [gameover, setGameover] = useState(false);
  var [set, newset] = useState(null);

  const choices = ['rock', 'paper', 'scissor'];

  function handle(choice) {
    setUserChoice(choice);
    generateCompChoice();
  }

  //generates random computer choices
  function generateCompChoice() {
    var compChoices = choices[Math.floor(Math.random() * 3)];
    setCompChoice(compChoices);
    console.log(compChoice);
  }

  //restart()--> reset the game
  function restart() {
    window.location.reload();
  }
  //function to set the maximum winning score
  function setting(val) {
    newset(val - 1)
  }

  //activating logic for the game
  useEffect(() => {
    var addedString = userChoice + compChoice;

    if (userPoint <= set && compPoint <= set) {
      if (addedString === 'rockscissor' || addedString === 'scissorpaper' || addedString === 'paperrock') {
        var updatedUser = userPoint + 1;
        setUserPoint(updatedUser);
        setResult("You Won");
        if (updatedUser === (set + 1)) {
          setGameover(true);
          setOverResult('You won the Game');
        }
      }
      if (addedString === 'scissorrock' || addedString === 'paperscissor' || addedString === 'rockpaper') {
        var updatedComp = compPoint + 1;
        setCompPoint(updatedComp);
        setResult("Computer Won");
        if (updatedComp === (set + 1)) {
          setGameover(true);
          setOverResult('Computer won the Game');
        }
      }
      if (addedString === 'scissorscissor' || addedString === 'paperpaper' || addedString === 'rockrock') {

        setResult('draw');

      }
    }
  }, [compChoice, userChoice]);

  return (
    <>
      <h1>Rock Paper Scissor</h1>
      <div className="settings">
        <h2>Select the maximum winning score</h2>
        <button onClick={() => { setting(3) }}>3</button>
        <button onClick={() => { setting(5) }}>5</button>
        <button onClick={() => { setting(10) }}>10</button>
      </div>
      <div className="container">
        <div className="playerPlatform">
          <h3>player score :{userPoint}</h3>
          <img src={`public/imgs/USER${userChoice}.png`} alt="hand" />

        </div>
        <div className="computerPlatform">
          <h3>computer score :{compPoint}</h3>
          <img src={`public/imgs/COMP${compChoice}.png`} alt="hand" />

        </div>
        <div className="res">{Result}</div>
      </div>
      <div className="buttons">
        {choices.map((item, index) => <button key={index}
          onClick={() => handle(item)} > {item} </button>)}
      </div>
      <div>
        <h1>{overResult}</h1>
        {gameover &&
          <button onClick={() => restart()}>Restart?</button>}
      </div>
    </>
  )
}

export default Game
