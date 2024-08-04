import { test } from 'vitest';
import { render } from '@testing-library/react'
import Page from './page'

test('renders home content', () => {
  const { getByText } = render(<Page />)

    getByText(/Hello World/i);
    getByText(/Let's play say the same thing!/i);
})

