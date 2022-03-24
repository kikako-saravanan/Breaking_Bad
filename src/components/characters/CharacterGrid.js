import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="parent-container">
      <section className="cards">
        {items.map((item) => (
          //key must be unique,using map it creates a list
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    </div>
  );
};

export default CharacterGrid;
