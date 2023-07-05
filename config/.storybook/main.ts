import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import path from "path";
import { BuildPaths } from '../build/types/config';
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config: any) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'node_modules'));

  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
  });

  config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  });
  
  config.module.rules.push(buildCssLoader(true));

    // if (config.resolve) {
    //   config.resolve.plugins = [
    //     ...(config.resolve.plugins || []),
    //     new TsconfigPathsPlugin({
    //       extensions: config.resolve.extensions,
    //     }),
    //   ];
    // }
    return config;
  },
};

export default config;
