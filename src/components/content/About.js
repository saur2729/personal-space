import React from "react";
import { Divider, Age } from "../util/Util";

export default function About() {
  return (
    <div className="up-box">
      <span
        style={{
          fontSize: "30px",
          fontFamily: "Raleway",
          letterSpacing: ".1em",
          color: "grey",
        }}
      >
        About Me
      </span>
      <Divider /> <br />
      <span style={{ fontVariant: "small-caps" }}>
        Age - <Age /> <br /><br />
        **To be updated soon....
        </span>

      <br />
    </div>
  );
}
