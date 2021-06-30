import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";
import { Graduates, Home } from "./Pages";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Graduates" exact component={Graduates} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
