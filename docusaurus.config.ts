import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "WFM Reporting",
  tagline: "All things reporting for Pro WFM",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://idkbirt.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nconklindev", // Usually your GitHub org/user name.
  projectName: "WFM Reporting", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "ignore", // ! Remove this when deploying
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/nconklindev/birt-docs/edit/main/",
          admonitions: {
            keywords: ["important"],
            extendDefaults: true,
          },
        },
        pages: {
          editUrl: "https://github.com/nconklindev/birt-docs/edit/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "WFM Reporting",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "dataDictionarySidebar",
          position: "left",
          label: "Data Dictionary",
        },
        {
          type: "docSidebar",
          sidebarId: "birtStudioSidebar",
          position: "left",
          label: "BIRT Studio",
        },
        {
          type: "docSidebar",
          sidebarId: "dataviewsSidebar",
          position: "left",
          label: "Dataviews",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          href: "https://github.com/nconklindev/birt-docs",
          position: "right",
          label: "GitHub",
        },
        {
          href: "https://linkedin.com/company/ukg",
          label: "LinkedIn",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Data Dictionary",
              to: "/docs/data-dictionary/getting-started",
            },
            {
              label: "BIRT Studio",
              to: "/docs/birt-studio/getting-started",
            },
            {
              label: "Dataviews",
              to: "/docs/dataviews/getting-started"
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "UKG Community",
              href: "https://community.ukg.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UKG. Built with ❤️ Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
