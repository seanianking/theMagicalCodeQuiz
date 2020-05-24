import * as React from "react";
import {ThemeContext} from "../App";

function Card() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            className="card"
            style={{
              backgroundColor: theme === "green" ? "#5cb85c" : "white",
              textAlign: "center"
            }}
          >
            <div
              style={{
                color: theme === "dark" ? "white" : "black",
                textAlign: "center"
              }}
            >
              The theme is: {theme}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  export default Card;