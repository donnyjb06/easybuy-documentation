# ? EasyBuy Documentation

> Product-grade docs for the EasyBuy frontend. Built to feel closer to polished design-system docs than a plain engineering wiki.

---

## ?? What This Repo Is

This repository is the **documentation home** for EasyBuy.

It exists to make three documentation surfaces feel like **one cohesive product**:

| Surface | Role | Why It Exists |
| --- | --- | --- |
| **Docusaurus** | Main docs site | Narrative docs, onboarding, architecture, and flow explanations |
| **Storybook** | Component explorer | Visual states, reusable UI behavior, and component-driven reference |
| **TypeDoc** | API + type reference | Generated source-level documentation for exported contracts |

---

## ?? Experience Goal

The docs should feel:

- **modern**
- **clear**
- **designed, not dumped**
- **consistent across pages**
- **useful to both new contributors and future maintainers**

The target quality bar is closer to:

- shadcn docs
- Tailwind docs
- modern design system sites

Not:

- default-theme pages with long walls of text
- flat markdown with no hierarchy
- documentation that looks disconnected from the product it explains

---

## ?? What Will Live Here

This repo will grow into:

- onboarding and setup guides
- frontend architecture docs
- auth flow documentation
- screen and component documentation
- integrated Storybook access
- integrated TypeDoc reference
- a durable docs operating system in [`docs-system.md`](./docs-system.md)

---

## ?? Design Direction

The documentation system should use:

- strong hierarchy
- restrained but intentional color
- clean spacing
- polished diagrams
- tasteful visual structure in markdown
- subtle motion where it improves feel and orientation

The goal is **confident and modern**, not flashy.

---

## ?? House Rules

Before making changes in this repo, read:

- [`docs-system.md`](./docs-system.md)

That file is the standing source of truth for:

- what gets documented first
- how docs should look and read
- how diagrams should be styled
- how consistency is maintained across Docusaurus, Storybook, and TypeDoc

---

## ?? Current Focus

The initial documentation scope is the current implemented frontend auth system:

- login
- register
- forgot password request
- forgot password verification/reset
- verify email

Planned but intentionally left as **Coming Soon** until implemented:

- OAuth / SSO
- Backend
- Testing Strategy
- Deployment

---

## ??? Working Principle

> If a page can be reduced to plain headers and paragraphs without losing anything, it probably needs stronger hierarchy, better structure, or a clearer visual idea.

This repo should document the codebase in a way that is:

- easy to scan
- pleasant to use
- accurate to the implementation
- maintainable as the app grows