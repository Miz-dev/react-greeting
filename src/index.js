import React from "react";
import ReactDom from "react-dom"; // HTMLにコンポーネントを反映するので、こちらを記載する。
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
