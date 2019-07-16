/* eslint-disable no-const-assign */
//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // Scores
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  // Quarter
  const [quarter, setQuarter] = useState(1);

  // Stretch goal function to take team name with score and apply to scoreboard after receiving input
  const handleScoreEvent = () => {
    // Get scoring team from user
    let team = prompt("Scoring team: ").trim();

    // Set correct score or reprompt for scoring team
    switch (team.toLowerCase()) {
      case "lions":
      case "home":
        setHomeScore(homeScore + parseInt(prompt("Points scored: ", 0)));
        break;
      case "tigers":
      case "away":
        setAwayScore(awayScore + parseInt(prompt("Points scored: ", 0)));
        break;
      default:
        alert(
          `Please enter a valid team name. For this game: 'Lions', 'Home', 'Tigers', or 'Away'`
        );
        handleScoreEvent();
    }
  };

  const handleQuarters = quarter => {
    quarter >= 4 ? setQuarter(1) : setQuarter(quarter + 1);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => handleScoreEvent()}
            // onClick={() => setHomeScore(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>

          <button
            onClick={() => setHomeScore(homeScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => handleScoreEvent()}
            // onClick={() => setAwayScore(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>

          <button
            onClick={() => setAwayScore(awayScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>

          <button onClick={() => handleQuarters(quarter)}>
            End of Quarter
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
