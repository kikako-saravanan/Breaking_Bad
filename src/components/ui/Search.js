import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q); //calling the getQuery function whenever the input field changes
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
