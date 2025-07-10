import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "xyz" },
  "Hello World using React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child" }, [
    React.createElement("h1", {key : "1"}, "I am h1 tag"),
    React.createElement("h2", {key : "2"}, "I am h2 tag"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", {key : "3"}, "I am h1 tag"),
    React.createElement("h2", {key : "4"}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
