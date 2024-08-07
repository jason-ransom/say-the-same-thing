"use client";
import { FC, useState, useEffect } from "react";
import PromptCard from "@/components/PromptCard";
import { INTERNAL_URLS } from "@/endpoints";
import { RandomWordResponse } from "@/types";

const RandomWordGetter: FC = () => {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(INTERNAL_URLS.RANDOM_WORD);
        const data = (await response.json()) as RandomWordResponse;

        setWord("word" in data ? data.word : data.error);
      } catch (error) {
        setWord("error fetching the word");
      }
    };

    fetchWord().catch((e) => console.error(e));
  }, []);

  return <PromptCard>{word}</PromptCard>;
};

export default RandomWordGetter;
