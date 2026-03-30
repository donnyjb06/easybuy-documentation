import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EasyBuy Docs",
  tagline: "Unified documentation for the EasyBuy frontend.",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  organizationName: "easybuy",
  url: "https://easybuy-docs.example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: "EasyBuy Docs",
      logo: {
        alt: "EasyBuy Docs",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          label: "Overview",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
          activeBaseRegex: "^/docs/(?!reference(?:/|$)).*",
        },
        {
          to: "/docs/reference",
          label: "API Reference",
          position: "left",
          activeBaseRegex: "^/docs/reference(?:/|$)",
        },
        {
          to: "/storybook",
          label: "Storybook",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Start Here",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "API Reference",
              to: "/docs/reference",
            },
          ],
        },
        {
          title: "Surfaces",
          items: [
            {
              label: "Storybook",
              to: "/storybook",
            },
            {
              label: "Generated contracts",
              to: "/docs/reference",
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} EasyBuy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
