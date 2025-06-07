import { defineCliConfig } from 'sanity/cli';
import type { UserConfig } from 'vite';

export default defineCliConfig({
  api: {
    projectId: 'von9yh08',
    dataset: 'production',
  },
  server: {
    port: 3333
  },
  vite: (config: UserConfig) => ({
    ...config,
    base: '/studio'
  })
});
