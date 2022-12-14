import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/installation">
            Installation 🚀️
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/configuration">
            Configuration 🔧
          </Link>
        </div>
      </div>
    </header>
  );
}

const Home = (): JSX.Element => (
  <Layout
    title="Wazo EUC Plugins documentation"
    description="Wazo EUC Plugins documentation">
    <HomepageHeader />
    <main>
      <HomepageFeatures />
    </main>
  </Layout>
);

export default Home;
