import { test, expect } from '@playwright/test'
import {BASE_URL} from "@/config/env/env";

test('should navigate to the home page', async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.getByText(/Hello World/i)).toBeVisible();
})