import React from "react";
import Contest from "./Contest";
import { gradeAMC } from "../../lib/grade";
import { AnswerState } from "../../lib/questions";

export default class AMC8 extends Contest {
  numberOfProblems() {
    return 25;
  }
  timeGiven() {
    return 40;
  }
  grade(url: string, updatedAnswer: any[]) {
    return gradeAMC(url, updatedAnswer);
  }
  score() {
    return `${this.state.correct
      .map((x) => {
        if (x === 1) return 1;
        else return 0;
      })
      .reduce((prev: number, val: number) => prev + val, 0)}/25`;
  }
  renderInputField(number: number) {
    return ["A", "B", "C", "D", "E", "Clear"].map((letter) => (
      <>
        {letter}{" "}
        <input
          name={number.toString()}
          type="radio"
          value={letter}
          checked={
            this.state.answer[number] === letter && letter !== "Clear"
              ? true
              : false
          }
          onChange={(e) => {
            this.setState({
              answer: this.state.answer.map((el: string, index: number) => {
                if (index === number) {
                  if (e.target.value === "Clear") return null;
                  return e.target.value;
                }
                return el;
              }),
              correct: this.state.correct.map(
                (el: AnswerState, index: number) => {
                  if (index === number) {
                    return AnswerState.undefined;
                  }
                  return el;
                }
              ),
              saved: false,
            });
          }}
        />
        <br />
      </>
    ));
  }
}
