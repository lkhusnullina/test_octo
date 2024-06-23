import styles from "./Card.module.css";

export function Card({ card}) {
    const colorClass = card.colorCard === 'blue' ? styles.card__blue : styles.card__darkblue;
    const colorSpan = card.colorCard === 'blue' ? styles.card__blueSpan : styles.card__darkblueSpan;
    return (
        <div className={styles.card}>
            <div className={`${styles.card__sticker} ${colorClass}`}>{card.category}</div>
            <div className={styles.card__item}>
                    <img className={styles.card__img} src={card.imgSrc} alt="cardPicture" />
                    <span className={`${styles.card__subtitle} ${colorSpan}`}>Adam Sandler</span>
                    <h3 className={styles.card__title}>{card.textTitle}</h3>
                    <p className={styles.card__text}>How can we help your technology and services business develop a revenue engine based</p>
                    <button className={`${styles.card__button} ${colorClass}`}>Call to action</button>
            </div>
        </div>
    )
}