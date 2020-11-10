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
      style: 'primary',
      title: 'Alt Docs',
      logo: {
        alt: 'Alt',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          label: 'Documentação',
          position: 'left',
          items: [
            {
              to: 'docs/',
              label: 'Introdução',
              position: 'left',
            },
            {
              to: 'docs/criando-um-negocio-no-alt',
              label: 'Primeiros Passos',
              position: 'left',
            },
            {
              to: 'docs/guides/ordenando-produtos-e-categorias-no-seu-site',
              label: 'Guias',
              position: 'left',
            },
          ]
        },
        {
          href: 'https://alt.app.br',
          label: 'Alt Zap',
          position: 'right',
          className: 'altzap-link'
        },
        {
          href: 'https://github.com/alt-zap',
          label: 'GitHub',
          position: 'right',
          className: 'github-link'
        },
        {
          to: 'docs/',
          label: 'Saiba mais',
          position: 'right',
          className: 'learn-more-link button button--secondary button--lg'
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
              to: 'docs/criando-um-negocio-no-alt/',
            },
            {
              label: 'Guias',
              to: 'docs/guides/ordenando-produtos-e-categorias-no-seu-site',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Alt Zap',
              href: 'https://portal.alt.app.br',

            },
            {
              label: 'GitHub',
              href: 'https://github.com/alt-zap',
            },
          ],
        },
      ],
      copyright: `
        <div class="copyright-container">
          <div class="logo-container">
            <img
              class="footer-logo"
              alt="Alt Zap Logo"
              src="/img/logo.svg"
            />
            <strong class="org-name">
              Alt Zap
            </strong>
          </div>

          <p class="org-description">
            Compartilhe seus produtos e receba pedidos pelo Whatsapp
          </p>

          <p class="full-copyright">
            Copyright © ${new Date().getFullYear()} Alt Zap. Feito com Docusaurus.
          </p>
        </div>
      `,
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
  plugins: [
    require.resolve('./dev/webpack-config')
  ]
};
