import styles from "./Cards.module.css";
import { CardsAll } from "../../constans";
import { Card } from "../Card/Card";

export function Cards() {
  return (
    <div className={styles.cards_block}>
      {CardsAll && CardsAll.length > 0 ?
      CardsAll.map((card) => (
        <Card key={card.id} card={card} />
      )) : 'нет доступных карточек'}
    </div>
  );
}
