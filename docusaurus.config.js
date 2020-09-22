/*eslint-env node */
module.exports = {
  title: 'Alt Docs',
  tagline: 'O portal de documentação oficial da plataforma Alt',
  url: 'https://docs.alt.app.br/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'alt',
  projectName: 'docs',
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Alt Docs',
      logo: {
        alt: 'Alt',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'none',
          label: 'Introdução',
          position: 'left',
        },
        {
          to: 'docs/gettingStarted',
          activeBasePath: 'none',
          label: 'Primeiros Passos',
          position: 'left',
        },
        {
          to: 'docs/guides',
          activeBasePath: 'none',
          label: 'Guias',
          position: 'left',
        },
        {
          href: 'https://github.com/alt-zap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: 'docs/',
            },
            {
              label: 'Primeiros Passos',
              to: 'docs/gettingStarted/',
            },
            {
              label: 'Guias',
              to: 'docs/guides/',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Alt Zap',
              to: 'https://alt-zap.vercel.app/',
            },
            {
              label: 'Estamos no GitHub',
              href: 'https://github.com/alt-zap',
            },
          ],
        },
      ],
      copyright: `Alt Zap © ${new Date().getFullYear()}. Feito com Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/alt-zap/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/main.css'),
        },
      },
    ],
  ],
};
