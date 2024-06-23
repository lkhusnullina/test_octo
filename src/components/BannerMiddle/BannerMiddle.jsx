import styles from "./BannerMiddle.module.css";
import bannerMiddle from '../../img/big_banner.jpg';

export function BannerMiddle() {
    return (
        <div className={styles.info__middle}>
            <div className={styles.info__block}>
                <h3 className={styles.info__title}>Solutions for people like you</h3>
                <p className={styles.info__description}>How can we help your technology and services business develop a revenue engine based on Hubspot?</p>
                <div className={styles.button__block}>
                    <button className={styles.button__main}>Call to action</button>
                    <button className={`${styles.button__main} ${styles.button__transparent}`}>Call to action</button>
                </div>
            </div>
            <img className={styles.image__banner} src={bannerMiddle} alt="bannerMiddle" />
        </div>
    )
}