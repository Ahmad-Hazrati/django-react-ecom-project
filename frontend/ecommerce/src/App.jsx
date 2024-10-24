import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Container>
          <h1>Welcome to Django Rest Frame Work using react-redux</h1>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default App;
