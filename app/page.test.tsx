import {Mock, test, vi, expect} from 'vitest';
import {render, waitFor} from '@testing-library/react'
import Page from './page'

global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(['Hello World']),
    })
) as Mock;

test('renders home content', async () => {
  const { getByText } = render(<Page />)

  await waitFor(() => {
    expect(getByText(/Hello World/i)).toBeTruthy();
    expect(getByText(/Let's play say the same thing!/i)).toBeTruthy();
  });
})

