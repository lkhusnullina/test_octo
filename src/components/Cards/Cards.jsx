import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import { CardsAll } from "../../constans";
import { Card } from "../Card/Card";

export function Cards() {
  const [cards, setCards] = useState(CardsAll);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setCards(CardsAll);
    } else if (window.innerWidth > 576 && window.innerWidth < 1200) {
      setCards(CardsAll.slice(0, 4));
    } else {
      setCards(CardsAll.slice(0, 2));
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.cards_block}>
      {cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
}
