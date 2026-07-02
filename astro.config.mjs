import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zhouying0818.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
