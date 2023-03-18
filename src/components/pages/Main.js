import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div className="columnCenter">
      <h1>Poolc 개발자 테스트</h1>
      <img
        src={process.env.PUBLIC_URL + "/img/0.png"}
        alt="poolc main character"
        className="image"
      />
      <Button onClick={goQuiz}>시작하기</Button>
    </div>
  );
}
export default Main;
