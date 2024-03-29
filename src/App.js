import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import Main from "./components/pages/Main";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";

function App() {
  return (
    <>
      <Header title="PoolC MBTI test"></Header>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main/>}></Route>
            <Route exact path="/quiz" element={<Quiz/>}></Route>
            <Route exact path="/result/:mbti" element={<Result/>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
