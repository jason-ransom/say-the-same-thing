import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import PromptCard from ".";

describe('PromptCard', () => {
  test('renders PromptCard child text', () => {
      const text = "Prompt Card";
      const { getByText } = render(
          <PromptCard>
              {text}
          </PromptCard>
      );

    getByText(text);
  });
});