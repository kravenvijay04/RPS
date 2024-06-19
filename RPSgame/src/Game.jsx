import { useState,useEffect } from "react";

const Game = () => {
  var [userChoice, setUserChoice] = useState('rock');
    var [compChoice, setCompChoice] = useState('rock');
    var [userPoint, setUserPoint] = useState(0);
    var [compPoint, setCompPoint] = useState(0);
    //var [result, setResult] = useState('Let see who going to win');
    const choices = ['rock', 'paper', 'scissor'];

    function handle(choice) {
        setUserChoice(choice);
        generateCompChoice();
    }
    function generateCompChoice() {
        var compChoices = choices[Math.floor(Math.random() * 3)];
        setCompChoice(compChoices);
        console.log(compChoice)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        var addedString = userChoice + compChoice;
        if (addedString === 'rockscissor' || addedString === 'scissorpaper' || addedString === 'paperrock') {
            var updatedUser = userPoint + 1;
            setUserPoint(updatedUser);
        }
        if (addedString === 'scissorrock' || addedString === 'paperscissor' || addedString === 'rockpaper') {
            var updatedComp = compPoint + 1;
            setCompPoint(updatedComp);
        }
    }, [compChoice, userChoice]);

    return (
        <>
            <h1>Rock Paper Scissor</h1>
            <div className="container">
                <div className="playerPlatform"><h3>player score :{userPoint}</h3></div>
                <div className="computerPlatform"><h3>computer score :{compPoint}</h3></div>
            </div>
            <div className="buttons">
                {choices.map((item, index) => <button key={index}
                    onClick={() => handle(item)} > {item} </button>)}

            </div>
            {/* <div className="info">{result}</div> */}
        </>
    )
}

export default Game
