import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://wirthless.dev',
  server: {
    port: 3000
  },
  integrations: [tailwind(), svelte()]
});