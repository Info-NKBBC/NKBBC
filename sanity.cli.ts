import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'von9yh08',
    dataset: 'production',
  },
  server: {
    port: 3333
  },
  vite: (config) => ({
    ...config,
    base: '/studio'
  })
});
