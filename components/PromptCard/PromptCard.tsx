import { FC } from 'react';
import styles from './promptCard.module.css';

export type PromptCardProps = {
  children: string;
};

const PromptCard: FC<PromptCardProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default PromptCard;
