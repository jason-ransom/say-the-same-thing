// create vitest for page.tsx
import { test } from 'vitest';
import { render } from '@testing-library/react'
import Page from './page'

test('renders learn react link', () => {
  const { getByText } = render(<Page />)

    getByText(/Hello World/i);
})

