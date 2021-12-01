import React from "react";
import ReactDom from "react-dom"; // HTMLにコンポーネントを反映するので、こちらを記載する。

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
