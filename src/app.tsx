import React from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

import "./app.css";
import { Container, Card, ReactLogo, ViteLogo } from "./styles";
import { Typography } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Container>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          <ViteLogo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <ReactLogo src={reactLogo} alt="React logo" />
        </a>
      </Container>
      <Typography variant="h1" component="h1">FazTar React-CRA Boilerplate Template</Typography>
      <Card>
        <Typography component="p">
          <code>Thanks For Choosing To Use FazTar</code>
        </Typography>
      </Card>
    </React.Fragment>
  );
}

export default App;
