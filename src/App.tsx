import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyle from "./Styles/GlobalStyle";
import { Graduates, Home, Login, Register, Upload } from "./Pages";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Graduates" exact component={Graduates} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Upload" exact component={Upload} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
