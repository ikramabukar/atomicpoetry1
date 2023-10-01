import React, { useState } from "react";

function PoetrySearch() {
  const [poemTitle, setPoemTitle] = useState("");
  const [poemLines, setPoemLines] = useState([]);
  const [error, setError] = useState("");

  const searchPoem = () => {
    const apiUrl = `https://poetrydb.org/title/${poemTitle}/lines.json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].lines) {
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
      <h3>Poetry Search</h3>
      <input
        type="text"
        placeholder="Enter poem title"
        value={poemTitle}
        onChange={(e) => setPoemTitle(e.target.value)}
      />
      <button onClick={searchPoem}>Search</button>

      {error && <p className="error">{error}</p>}

      {poemLines.length > 0 && (
        <div className="poem">
          {poemLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default PoetrySearch;
