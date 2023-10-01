import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../styles/poetrysearch.css";

function PoetrySearch() {
  const [poemTitleInput, setPoemTitleInput] = useState("");
  const [poemTitle, setPoemTitle] = useState("");
  const [poemLines, setPoemLines] = useState([]);
  const [error, setError] = useState("");

  const searchPoem = () => {
    const apiUrl = `https://poetrydb.org/title/${poemTitleInput}/lines.json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].lines) {
          setPoemTitle(poemTitleInput);
          setPoemLines(data[0].lines);
          setError("");
        } else {
          setPoemLines([]);
          setError("Poem not found. Please try a different title.");
        }
      })
      .catch((error) => {
        console.error("Error fetching poem:", error);
        setError("An error occurred while fetching the poem.");
      });
  };

  return (
    <div>
      <h2 className="poetry-search-title">Poetry Search</h2>
      <p className="poetry-search-text">Find any poem...</p>
      <br />
      <div>
        <input
          className="poetry-input"
          type="text"
          placeholder="Enter poem title"
          value={poemTitleInput}
          onChange={(e) => setPoemTitleInput(e.target.value)}
        />
      </div>
      <br />
      <button className="btn-btn-poetry" onClick={searchPoem}>
        SEARCH
      </button>

      {error && <p className="error-message">{error}</p>}
      {poemLines.length > 0 && (
        <Container>
          <Row className="poetry-search-row">
            <Col className="col-lg-8 col-md-12 col-sm-12">
              <Form className="poem-form">
                <div className="poem">
                  <p className="poem-title">{poemTitle.toUpperCase()}</p>
                  {poemLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
      <div />
    </div>
  );
}

export default PoetrySearch;
