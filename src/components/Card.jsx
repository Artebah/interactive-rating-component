import React from "react";
import { ReactComponent as IconStarSvg } from "../images/icon-star.svg";
import { ReactComponent as IconThanksSvg } from "../images/illustration-thank-you.svg";

function Card({ className, children }) {
  return <div className={"card " + className}>{children}</div>;
}

export function RatingCard({
  numsRating,
  setRating,
  ratingNumber,
  handleFormSubmit,
  isError,
}) {
  return (
    <Card className="card-rating">
      <div className="card-rating__image">
        <span>
          <IconStarSvg />
        </span>
      </div>
      <h1 className="card-title card-rating__title">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <ul className="card-rating__nums">
          {numsRating.map((num) => (
            <li key={num}>
              <button
                type="button"
                className={ratingNumber === num ? "active" : ""}
                onClick={() => setRating(num)}>
                {num}
              </button>
            </li>
          ))}
        </ul>
        <button className="card-rating__button" type="submit">
          submit
        </button>
        {isError ? (
          <p className="card-rating__error">Please, choose the number of rating</p>
        ) : null}
      </form>
    </Card>
  );
}
export function ThanksCard({ ratingNumber }) {
  return (
    <Card className="card-thanks">
      <div className="card-thanks__image">
        <span>
          <IconThanksSvg />
        </span>
      </div>
      <div className="card-thanks__rating">
        <span>You selected {ratingNumber} out of 5</span>
      </div>
      <h1 className="card-title card-thanks__title">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </Card>
  );
}
