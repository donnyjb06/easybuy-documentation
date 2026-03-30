import {useEffect, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function StorybookPage(): ReactNode {
  const storybookUrl = useBaseUrl('/storybook-static/index.html');

  useEffect(() => {
    window.location.replace(storybookUrl);
  }, [storybookUrl]);

  return (
    <Layout title="Storybook" description="Redirecting to the full Storybook surface.">
      <main className="container margin-vert--lg storybook-shell">
        <section className="doc-hero storybook-hero">
          <span className="doc-kicker">Storybook</span>
          <h1>Opening the full Storybook surface.</h1>
          <p className="doc-summary">
            Storybook now opens as its own full-screen surface instead of being embedded inside
            another iframe. This avoids the blank preview canvas issue in the docs shell.
          </p>
          <div className="doc-chip-row">
            <span className="doc-chip">Full-screen Storybook</span>
            <span className="doc-chip">Built from frontend source</span>
            <span className="doc-chip">Use browser back to return to docs</span>
          </div>
          <p className="doc-summary">
            If the redirect does not fire automatically, open{' '}
            <a href={storybookUrl}>Storybook directly</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
