import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";
import { Home } from "./Pages";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
