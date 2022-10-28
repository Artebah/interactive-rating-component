import React from "react";
import { RatingCard, ThanksCard } from "./components/Card";

function App() {
  const numsRating = [1, 2, 3, 4, 5];
  const [isRated, setIsRated] = React.useState(false);
  const [ratingNumber, setRatingNumber] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!ratingNumber) return setIsError(true);
    setIsRated(true);
  };

  const setRating = (num) => {
    setRatingNumber(num);
  };

  return (
    <div className="wrapper">
      {!isRated ? (
        <RatingCard
          numsRating={numsRating}
          setRating={setRating}
          ratingNumber={ratingNumber}
          setRatingNumber={setRatingNumber}
          handleFormSubmit={handleFormSubmit}
          isError={isError}
        />
      ) : (
        <ThanksCard ratingNumber={ratingNumber} />
      )}
    </div>
  );
}

export default App;
