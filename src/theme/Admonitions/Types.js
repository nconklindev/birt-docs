import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

function ImportantAdmonition(props) {
  return (
    <div style={{ border: "red", padding: 10 }}>
      <h5 style={{ color: "red" }}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  important: ImportantAdmonition,
};

export default AdmonitionTypes;
