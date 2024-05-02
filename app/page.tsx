import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainComponent}>
        <h1>Check This Mine</h1>
        <input
          className={styles.input}
          type="text"
          required
          minLength={4}
          maxLength={20}
        />
        <button className={styles.playButton}>Play</button>
      </div>
    </main>
  );
}
