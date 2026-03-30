import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function StorybookPage(): ReactNode {
  const storybookUrl = useBaseUrl('/storybook-static/index.html');

  return (
    <Layout title="Storybook" description="Integrated Storybook surface for EasyBuy shared UI.">
      <main className="container margin-vert--lg storybook-shell">
        <section className="doc-hero storybook-hero">
          <span className="doc-kicker">Integrated Storybook</span>
          <h1>Shared component states live inside the docs system, not beside it.</h1>
          <p className="doc-summary">
            This page wraps the React Native Web Storybook build from the frontend repo.
            Use it for visual state review, then move back into the hand-authored docs or generated
            reference when you need deeper implementation detail.
          </p>
          <div className="doc-chip-row">
            <span className="doc-chip">Auth-first component surface</span>
            <span className="doc-chip">Built from frontend source</span>
            <span className="doc-chip">Static mount inside Docusaurus</span>
          </div>
          <div className="actions" style={{marginTop: '1.4rem'}}>
            <a className="button button--primary" href={storybookUrl}>
              Open Storybook in a new tab
            </a>
            <Link className="button button--secondary" to="/docs/components">
              Read the components guide
            </Link>
          </div>
        </section>

        <section className="storybook-frameWrap">
          <iframe
            className="storybook-frame"
            src={storybookUrl}
            title="EasyBuy Storybook"
          />
        </section>
      </main>
    </Layout>
  );
}