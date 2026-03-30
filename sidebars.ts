import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundation',
      items: ['getting-started', 'tech-stack', 'folder-structure'],
    },
    {
      type: 'category',
      label: 'Application',
      items: ['architecture', 'navigation', 'auth-flow', 'screens'],
    },
    {
      type: 'category',
      label: 'Reference Guide',
      items: ['components', 'hooks', 'types', 'services'],
    },
    {
      type: 'category',
      label: 'Coming Soon',
      items: [
        'coming-soon/oauth-sso',
        'coming-soon/backend',
        'coming-soon/testing-strategy',
        'coming-soon/deployment',
      ],
    },
  ],
};

export default sidebars;