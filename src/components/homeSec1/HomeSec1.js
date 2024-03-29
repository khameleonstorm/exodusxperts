import styles from './HomeSec1.module.css';

export default function HomeSec1({title, subtitle, card, adjust}) {
  return (
    <div className={styles.container} id="services">
      {!adjust && <h1 className={styles.title}>{title}</h1>}
      {!adjust && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.cardContainer}>
        {card.map((c, index) => (
          <div className={styles.card} key={index}>
            <img src={c.image} alt="card" />
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
