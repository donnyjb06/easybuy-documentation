# ?? Docs System

> This file is the durable memory for how EasyBuy documentation should be written, structured, and designed.

If the docs evolve later, this file should keep the system consistent.

---

## ? North Star

EasyBuy docs should feel like a **product-quality documentation experience**, not a plain project wiki.

The desired feel is:

- **modern**
- **calm**
- **confident**
- **structured**
- **visually intentional**

Reference quality:

- shadcn docs
- Tailwind docs
- modern design system documentation

Avoid:

- default-theme blandness
- long text walls with weak hierarchy
- pages that feel like exported notes instead of designed documentation

---

## ?? Visual Thesis

The docs system should look like:

> a premium engineering handbook with product-design discipline

That means:

- strong typography hierarchy
- clear section rhythm
- restrained color usage
- generous spacing
- sparse but purposeful accents
- diagrams that feel deliberate instead of generic
- a docs home page that feels designed, not scaffolded

---

## ?? Content Thesis

Each documentation surface has one main job:

| Surface | Primary Job | Secondary Job |
| --- | --- | --- |
| **Docusaurus** | explain the system | orient new contributors |
| **Storybook** | show reusable UI states | support implementation and review |
| **TypeDoc** | expose exported code contracts | back up the narrative docs |

Rule:

- **Docusaurus tells the story**
- **Storybook shows the UI**
- **TypeDoc proves the contract**

They should feel unified in voice, naming, and visual quality.

---

## ??? Interaction Thesis

Motion is allowed, but it must stay subtle and purposeful.

Good motion for the docs site:

- soft fade or slide-in on hero content
- restrained section reveal on scroll
- small hover transitions for cards, links, or navigation cues
- polished state changes that improve orientation

Bad motion:

- decorative animation with no informational value
- heavy parallax
- flashy transitions that distract from reading
- motion that makes docs feel like a marketing page instead of a product doc site

Use motion to create **presence and hierarchy**, not noise.

---

## ?? Markdown Should Not Be Bland

Markdown files in this repo should still feel polished.

Do:

- use strong opening blurbs or blockquotes
- use tables when comparison improves scanning
- use dividers to create rhythm
- use emoji sparingly but intentionally for section anchors
- use short sections with clear purpose
- use checklists, summary boxes, and compact reference layouts where they help
- make the first screen of a long page feel purposeful, not accidental

Do not:

- dump long sections of plain headers and paragraphs
- overuse nested bullets
- make every page look like a textbook chapter
- add decorative noise with no structural value

A markdown doc should still feel **edited and designed** even before Docusaurus styling is applied.

---

## ?? Why We Document Certain Things First

Documentation priority is based on:

- reuse
- architectural importance
- behavior ownership
- user-facing impact
- likelihood of causing confusion if undocumented

### ? Must Document

Document first when an item does one or more of the following:

- defines a shared contract used in multiple places
- controls app behavior, flow, routing, or state transitions
- exposes a public API to the rest of the codebase
- orchestrates a real user-facing flow that already exists
- is reused across screens or features

Examples:

- provider values and actions
- exported auth types and schema-derived types
- service/API functions
- screen orchestration hooks
- shared form components and important props

### ?? Should Document

Document after the must layer when an item supports understanding but is not the main behavioral contract.

Examples:

- layout helpers
- content/config objects
- thin route wrappers
- theme adapters
- lower-level utilities supporting must-document features

### ? Optional

Document later when an item is thin, repetitive, generated, placeholder-only, or mostly an implementation detail.

Examples:

- large generated primitive wrapper families
- broad icon export surfaces
- placeholder screens
- tiny helper types with low teaching value

---

## ?? Core Documentation Rules

- Do not guess behavior.
- If behavior is unclear, mark it as `REQUIRES CLARIFICATION`.
- Prefer documenting exported/shared code over trivial internals.
- Explain ownership, dependencies, side effects, and outputs.
- Keep docs aligned with the currently implemented product scope.
- Leave Future OAuth / SSO, Backend, Testing Strategy, and Deployment as **Coming Soon** until implemented.

---

## ?? Writing Style Rules

Write for engineers who need to understand the system fast.

Use this voice:

- short
- direct
- high-signal
- concrete
- implementation-aware

Prefer writing that explains:

- what this unit owns
- what it depends on
- what it returns, updates, or triggers
- what assumptions it makes
- where flow control or state changes happen

Avoid:

- repeating the symbol name as the whole explanation
- vague filler language
- commentary that sounds polished but says nothing
- pretending unclear behavior is certain

---

## ??? Docusaurus Design Rules

The Docusaurus site should not feel like a standard page with headers and text.

It should use modern documentation UI patterns such as:

- intentional hero composition on top-level pages
- clean feature grids only when they add scanning value
- visual section changes through background, spacing, or layout rhythm
- clear in-page navigation and progression cues
- tasteful code framing and callout styling
- diagram sections that feel integrated into the page design

Design direction:

- cardless by default, unless cards genuinely improve scanning
- two typefaces max unless there is a strong reason
- one primary accent color system
- deliberate spacing before decorative treatment
- contrast and layout doing more work than heavy ornament

The docs homepage should feel closer to a polished product landing page than a generated manual.

---

## ?? Docusaurus Structure Principles

Recommended initial order:

1. Getting Started
2. Tech Stack
3. Folder Structure
4. Architecture
5. Navigation
6. Auth Flow
7. Screens
8. Components
9. Hooks
10. Types
11. Services
12. Reference

Why this order works:

- orientation comes before implementation detail
- user flows come before low-level reference
- TypeDoc should support the narrative docs instead of replacing them

Each page should have one main job.

If a page starts doing too many jobs, split it.

---

## ?? Storybook Rules

Storybook should document the most reusable and behavior-rich components first.

Prioritize components that:

- accept meaningful props
- show multiple states
- are reused across more than one screen
- help reviewers understand UI behavior quickly

Start with app-authored components before generated primitive wrappers.

Storybook should feel like a **supporting product surface**, not a dumping ground for every tiny primitive.

---

## ?? TypeDoc Rules

TypeDoc should focus on exported contracts that matter.

Use it to document:

- exported types and interfaces
- provider and hook contracts
- service/API function surfaces
- shared component props
- shared utilities with real behavioral impact

Do not rely on TypeDoc alone for system understanding.

TypeDoc is reference, not narrative.

---

## ??? TSDoc Conventions

For functions, hooks, and components:

- start with a one-sentence summary
- add `@param` for meaningful inputs
- add `@returns` for rendered output or returned helpers
- add `@throws` only when callers need to know
- add `@typeParam` for meaningful generics

For interfaces and object types:

- document the type itself
- document each meaningful field
- mark uncertain fields with `REQUIRES CLARIFICATION`

For config objects:

- explain the object’s role in the system
- document the top-level sections that influence behavior

---

## ?? Mermaid Diagram Rules

Diagrams should look modern, editorial, and intentional.

### Structure Rules

- one diagram should answer one question
- keep labels short and readable
- prefer 5 to 9 nodes for an initial diagram
- use subgraphs to reveal boundaries when useful
- match direction to meaning
- avoid cluttered crossings and overly literal file maps

### Style Rules

Use Mermaid classes to avoid default bland diagrams.

Preferred palette:

- **product / core flow**: deep blue
- **UI / page layer**: soft slate
- **state / data**: pale cyan
- **warning / clarification**: warm amber
- **future / not implemented**: muted dashed style

Preferred qualities:

- balanced node sizes
- consistent label length
- clear grouping by responsibility
- enough whitespace to breathe

A diagram should feel like part of the documentation design system, not a pasted technical artifact.

---

## ?? Source Of Truth Rules

- **Docusaurus** is the narrative source of truth.
- **Storybook** is the visual source of truth for reusable UI states.
- **TypeDoc** is the generated reference source of truth for exported contracts.
- **docs-system.md** is the style-and-process memory for how the documentation system stays consistent.

If two surfaces disagree:

1. fix the implementation or clarify the intended behavior
2. update the narrative docs
3. update the code comments
4. regenerate or realign reference surfaces

---

## ?? Change Workflow

When making docs changes later:

1. identify whether the change affects narrative docs, component docs, reference docs, or multiple surfaces
2. update the closest source of truth first
3. propagate terminology and behavior consistently
4. review whether the page still feels visually intentional
5. stop and clarify if the code behavior is uncertain

Before merging a docs change, ask:

- does this improve scanning?
- does this preserve consistency?
- does this reflect the actual implementation?
- does this feel designed, not dumped?

---

## ?? Current Product Scope

Implemented now:

- login
- register
- forgot password request
- forgot password verification/reset
- verify email

Not yet implemented:

- OAuth / SSO
- most product features beyond auth
- backend-focused system docs

These should remain visibly separate from current behavior.

---

## ? Documentation Quality Bar

A page or comment is good when:

- a new contributor can tell what the code owns
- a maintainer can see how it connects to adjacent code
- the documented behavior matches the implementation
- uncertainty is visible instead of hidden
- the page is easy to scan in seconds
- the page feels modern and intentionally structured

---

## ?? Maintenance Note

This file should be updated when the documentation system gains new conventions.

If EasyBuy docs ever start drifting toward generic, flat, or inconsistent output, fix this file first so the system memory is corrected at the root.