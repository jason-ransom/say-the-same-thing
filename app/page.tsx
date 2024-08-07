import styles from './page.module.css';
import RandomWordGetter from '@/components/RandomWordGetter';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        Let&apos;s play say the same thing!
      </div>
      <RandomWordGetter />
    </div>
  );
}
