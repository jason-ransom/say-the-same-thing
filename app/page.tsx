import styles from "./page.module.css";
import PromptCard from "@/components/PromptCard";

export default function Home() {
  return (
      <div className={styles.container}>
        <PromptCard>
            Hello World
        </PromptCard>
      </div>
  );
}
