'use client'
import  { FC, useState, useEffect } from 'react';
import PromptCard from "@/components/PromptCard";

const RandomWordGetter: FC = () => {
  const [word, setWord] = useState<string>('');

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        const data = await response.json();
        setWord(data[0]);
      } catch (error) {
        setWord('error fetching the word')
      }
    };

    fetchWord().catch(e => console.error(e));
  }, []);

  return <PromptCard>{word}</PromptCard>
};

export default RandomWordGetter;
