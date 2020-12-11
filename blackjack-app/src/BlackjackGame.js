import React from "react";
import CardList from "./CardList";
import Score from "./Score";
import "./BlackjackGame.css";



/* Get a random element from an array */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

/* Get a random value, suite combination from card data */
function getCard(values, suits) {
  const randomVal = choice(values);
  const randomSuit = choice(suits);
  return randomVal + randomSuit

}
