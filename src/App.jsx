import React from "react";
import ColorfulMassage from "./components/ColorfulMassage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMassage color="blue">お元気ですか？</ColorfulMassage>
      <ColorfulMassage color="pink">元気です！</ColorfulMassage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
