import Link from "next/link";
import styles from "./page.module.css";
import ROUTES from "./utils/routes";

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
        <Link href={ROUTES.GAME}>
          <button className={styles.playButton}>Play</button>
        </Link>
      </div>
    </main>
  );
}
