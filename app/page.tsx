import styles from "./page.module.css";
import PromptCard from "@/components/PromptCard";

export default function Home() {
  return (
      <div className={styles.main}>
          <div className={styles.description}>
              Let&apos;s play say the same thing!
          </div>
        <PromptCard>
            Hello World
        </PromptCard>
      </div>
  );
}
