import React, { useState } from "react";
import Pagination from "../common/Pagination";
import Select from "../common/Select";
import question from "./question";
import calMbti from "./calMbti";

function Quiz() {
  const [index, setIndex] = useState(0);
  const nextIndex = () => {
    setIndex(index + 1);
  };
  const prevIndex = () => {
    setIndex(index - 1);
  };

  const calAnswer=()=>{
    return calMbti(select);
  }

  const [select, setSelect] = useState({
    0: { 0: true },
    1: { 0: true },
    2: { 0: true },
    3: { 0: true },
    4: { 0: true },
    5: { 0: true },
    6: { 0: true },
    7: { 0: true },
  });
  const update0 = () => {
    setSelect(() => {
      return { ...select, [index]: { 0: true } };
    });
  };
  const update1 = () => {
    setSelect(() => {
      return { ...select, [index]: { 1: true } };
    });
  };
  const update2 = () => {
    setSelect(() => {
      return { ...select, [index]: { 2: true } };
    });
  };
  const update3 = () => {
    setSelect(() => {
      return { ...select, [index]: { 3: true } };
    });
  };

  return (
    <div>
      <h3>{index}번</h3>
      <h4>{question[index].question}</h4>
      <img
        src={process.env.PUBLIC_URL + "/img/q"+index+".png"}
        alt="poolc main character"
        className="image"
      />
      <Select selected={select[index][0]} onClick={update0}>
        {question[index][0]}
      </Select>
      <Select selected={select[index][1]} onClick={update1}>
        {question[index][1]}
      </Select>
      <Select selected={select[index][2]} onClick={update2}>
        {question[index][2]}
      </Select>
      <Select selected={select[index][3]} onClick={update3}>
        {question[index][3]}
      </Select>
      <Pagination
        nextIndex={nextIndex}
        prevIndex={prevIndex}
        index={index}
        calAnswer={calAnswer}
      ></Pagination>
    </div>
  );
}
export default Quiz;
