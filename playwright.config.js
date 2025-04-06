// playwright.config.ts
import { defineConfig } from '@playwright/test';



export default defineConfig({
  reporter: [['html', { open: 'never' }]],
  testDir: './tests',
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});

