import React from "react";
import Button from "../common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import mbtiList from "./mbtiList";

function Result() {
  const navigate = useNavigate();
  const { mbti } = useParams();
  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="columnCenter">
      <h2>
        당신은 {mbtiList[mbti].name} 개발자({mbti})입니다
      </h2>
      <img
        src={process.env.PUBLIC_URL + "/img/" + mbti + ".png"}
        alt="poolc cat character"
        className="image"
      />
      <div className="resultWrapper">{mbtiList[mbti].content}</div>
      <b>
        <CgDanger />
        주의
      </b>
      <div className="resultWrapper">{mbtiList[mbti].caution}</div>
      <Button
        kakao
        onClick={() => {
          alert("바밤바");
        }}
      >
        카카오톡으로 공유하기
      </Button>
      <Button onClick={goMain}>메인으로 돌아가기</Button>
    </div>
  );
}
export default Result;
