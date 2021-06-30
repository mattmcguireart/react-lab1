import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocoVotes, setChocoVotes] = useState<number>(0);
  const [vanillaVotes, setVanillaVotes] = useState<number>(0);
  const [strawberryVotes, setStrawberryVotes] = useState<number>(0);
  let totalVotes: number = chocoVotes + vanillaVotes + strawberryVotes;
  let chocPercentage: string = `${((chocoVotes / totalVotes) * 100).toFixed(
    2
  )}%`;
  let vanillaPercentage: string = `${(
    (vanillaVotes / totalVotes) *
    100
  ).toFixed(2)}%`;
  let strawberryPercentage: string = `${(
    (strawberryVotes / totalVotes) *
    100
  ).toFixed(2)}%`;
  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={() => setChocoVotes((prevState) => prevState + 1)}>
          Chocolate
        </button>
        <button onClick={() => setVanillaVotes((prevState) => prevState + 1)}>
          Vanilla
        </button>
        <button
          onClick={() => setStrawberryVotes((prevState) => prevState + 1)}
        >
          Strawberry
        </button>
      </div>
      {totalVotes > 0 ? (
        <div>
          {chocoVotes > 0 && (
            <>
              <p>
                Chocolate:{chocoVotes} ({chocPercentage})
              </p>
              <div
                className="vote-bar chocolate"
                style={{ width: chocPercentage }}
              ></div>
            </>
          )}

          {vanillaVotes > 0 && (
            <>
              <p>
                Vanilla:{vanillaVotes} ({vanillaPercentage})
              </p>
              <div
                className="vote-bar vanilla"
                style={{ width: vanillaPercentage }}
              ></div>
            </>
          )}

          {strawberryVotes > 0 && (
            <>
              <p>
                Strawberry:{strawberryVotes} ({strawberryPercentage})
              </p>
              <div
                className="vote-bar strawberry"
                style={{ width: strawberryPercentage }}
              ></div>
            </>
          )}
        </div>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};
export default Votes;
