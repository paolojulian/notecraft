import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  presets: [require('@paolojulian.dev/design-system/tailwind-config/tailwind.config.js')],
  content: ['./src/**/*.tsx'],
  theme: {},
};

export default config;
