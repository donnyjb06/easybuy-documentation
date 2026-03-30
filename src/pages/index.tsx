import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Surface = {
  label: string;
  title: string;
  description: string;
};

const surfaces: Surface[] = [
  {
    label: 'Docusaurus',
    title: 'Narrative docs with actual structure',
    description:
      'Architecture, onboarding, navigation, and auth flow pages will live here with stronger hierarchy than a default scaffold.',
  },
  {
    label: 'Storybook',
    title: 'Component states that feel reviewable',
    description:
      'Reusable UI will be documented as interactive states, not just screenshots or pasted prop lists.',
  },
  {
    label: 'TypeDoc',
    title: 'Reference that matches exported contracts',
    description:
      'Types, hooks, services, and shared component props will generate from the code that actually owns the behavior.',
  },
];

const principles = [
  'Designed, not dumped',
  'Modern hierarchy before ornament',
  'Subtle motion only when it improves feel',
  'Current shipped behavior first',
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="EasyBuy Docs"
      description="A unified documentation system for the EasyBuy frontend.">
      <main className={styles.pageShell}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />
          <div className={clsx('container', styles.heroInner)}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>EasyBuy Documentation System</span>
              <h1 className={styles.title}>
                Product-grade docs for an auth-first frontend.
              </h1>
              <p className={styles.lead}>
                One documentation system. One visual language. One place to
                explain architecture, UI states, and exported contracts without
                falling back to plain template pages.
              </p>
              <div className={styles.actions}>
                <Link className={clsx('button', styles.primaryAction)} to="/docs/intro">
                  Enter the docs
                </Link>
                <a className={styles.secondaryAction} href="#system-surfaces">
                  Explore the system
                </a>
              </div>
            </div>
            <aside className={styles.signalRail}>
              <span className={styles.railLabel}>Current scope</span>
              <ul className={styles.scopeList}>
                <li>Login</li>
                <li>Register</li>
                <li>Verify email</li>
                <li>Forgot password</li>
                <li>Reset verification</li>
              </ul>
              <div className={styles.scopeDivider} />
              <span className={styles.railLabel}>Design rules</span>
              <ul className={styles.scopeList}>
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="system-surfaces" className={styles.surfaceSection}>
          <div className={clsx('container', styles.sectionInner)}>
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>Three surfaces, one system</span>
              <h2>Each part of the docs has one job.</h2>
              <p>
                The goal is not more documentation tooling. The goal is a cleaner
                contributor experience where narrative docs, component states, and
                API reference reinforce each other.
              </p>
            </div>
            <div className={styles.surfaceGrid}>
              {surfaces.map((surface) => (
                <article key={surface.label} className={styles.surfacePanel}>
                  <span className={styles.surfaceLabel}>{surface.label}</span>
                  <h3>{surface.title}</h3>
                  <p>{surface.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bandSection}>
          <div className={clsx('container', styles.bandInner)}>
            <div>
              <span className={styles.kicker}>Built to stay consistent</span>
              <h2>The system rules live alongside the docs.</h2>
            </div>
            <p>
              The repo stores its own documentation memory so later changes keep
              the same tone, structure, and visual standard instead of drifting
              back toward generic pages.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
