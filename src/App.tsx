import { useState } from "react";
import "./App.css";
import NavUi from "./components/navbar/Ui";
import styled from "styled-components";
import Main from './components/main/index'

function App() {
  // const [count, setCount] = useState(0)
  const Wrapper = styled.div`
    background-color: #171718;
    /* height: 80%; */
  `;

  return (
    <>
      <NavUi />

      {/* <Wrapper style={{ backgroundColor: "#232329" }} /> */}
      <Main/>
    </>
  );
}

export default App;
