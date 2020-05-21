import * as React from "react";
import Card from "./Card";

function Layout() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Consuming Context</h1>
        <div style={{ margin: "0 auto" }}>
          <Card />
        </div>
      </div>
    );
  }

  export default Layout;