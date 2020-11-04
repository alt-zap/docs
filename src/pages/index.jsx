import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ExternalLink from '../components/ExternalLink';

import './styles.css';

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}
    >
      <div className="home-page-wrapper">
        <header className="hero hero-banner">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className="buttons">
                <Link
                  className="button button--primary explore-button"
                  to={useBaseUrl('docs/')}
                >
                  Explorar
                </Link>
              </div>
            </div>
            <img
              className="hero-image"
              src={useBaseUrl('img/hero.svg')}
              alt=""
            />
          </div>
        </header>

        <section className="about-section">
          <div className="container">
            <p className="description">
              O&nbsp;
              <ExternalLink href="https://portal.alt.app.br">
                <b>Alt Zap</b>
              </ExternalLink>
              &nbsp;é uma <strong>plataforma gratuita</strong> criada
              para ajudar pequenos e médios negócios a venderem pela internet.
              Nele, você pode compartilhar os seus produtos online e receber
              pedidos pelo&nbsp;
              <ExternalLink href="https://www.whatsapp.com/?lang=pt-br">
                WhatsApp
              </ExternalLink>
              .<br /><br />
              É a solução certa para levar o seu negócio para o próximo nível!
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
