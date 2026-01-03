# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

<!--
Sync Impact Report

- Version change: [UNSET] → 1.0.0
- Modified principles:
	- [PRINCIPLE_1_NAME] -> Accessibility & Inclusion
	- [PRINCIPLE_2_NAME] -> Static-first Performance
	- [PRINCIPLE_3_NAME] -> Minimal Dependencies & Simplicity
	- [PRINCIPLE_4_NAME] -> SEO & Discoverability
	- [PRINCIPLE_5_NAME] -> Testing & Quality Gates
- Added sections: Constraints & Standards; Development Workflow
- Removed sections: None
- Templates reviewed:
	- .specify/templates/plan-template.md ✅ aligned
	- .specify/templates/spec-template.md ✅ aligned
	- .specify/templates/tasks-template.md ✅ aligned
	- .specify/templates/agent-file-template.md ✅ aligned
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): original adoption date unknown — please set

--
-- Report generated: 2026-01-03
-->

# solar-site Constitution

## Core Principles

### Accessibility & Inclusion
All public user interfaces MUST meet WCAG 2.1 AA accessibility standards where practical. Code MUST use semantic HTML, support keyboard navigation, provide meaningful alt text, ensure color contrast, and include ARIA where necessary. Rationale: Accessibility is non‑negotiable for public websites — it reduces legal risk, expands reach, and improves usability for everyone.

### Static-first Performance
Pages SHOULD be implemented using static generation (SSG) or ISR where appropriate to minimize runtime work and maximize perceived performance. Assets MUST be optimized (images, fonts), scripts deferred, and critical CSS prioritized. Rationale: Fast, static-first sites improve UX, reduce hosting cost, and make SEO signals stronger.

### Minimal Dependencies & Simplicity
The project MUST minimize third-party dependencies. Approved stack: Next.js (App Router), Tailwind CSS. No other runtime dependencies are allowed without an explicit, documented justification and approval. Rationale: Fewer dependencies reduce security surface area, build complexity, and long‑term maintenance.

### SEO & Discoverability
Content MUST use canonical URLs, structured metadata (`<title>`, meta description, Open Graph, Twitter cards), semantic headings, and crawl-friendly sitemaps/robots rules. Pages SHOULD be indexable and include meaningful link text. Rationale: Good SEO is essential for discoverability and user acquisition.

### Testing & Quality Gates
Every change that affects user-facing behavior MUST include relevant tests or automated audits: unit tests for logic, accessibility scans (Lighthouse/axe) for UI, and basic performance budgets. Pull requests MUST pass CI checks before merge. Rationale: Automated gates keep regressions out of production and maintain site quality.

## Constraints & Standards

- Stack: Next.js (App Router, React), Tailwind CSS. The project targets static export or Vercel-hosted deployments.
- Styling: Use Tailwind utility classes and semantic components; prefer composition over custom CSS where possible.
- Accessibility: WCAG 2.1 AA target; keyboard-first interaction; screen-reader testing for key flows.
- SEO: Provide per-page metadata, canonical links, structured data for primary content where applicable.
- Privacy & Compliance: Minimize third‑party trackers; document any analytics and obtain necessary approvals.
- Dependency policy: No additional dependencies without documented justification and approval from maintainers.

## Development Workflow

- Branching: Feature branches named `feat/<short-name>`; bugfixes `fix/<short-name>`.
- Pull Requests: Link to an issue or spec; include screenshots/recordings for UI changes; reference accessibility and SEO impacts.
- Reviews: Require at least one approving review from a maintainer and successful CI checks (typecheck, lint, tests, accessibility audits) before merge.
- Testing: Write tests for business logic; include accessibility checks in CI; run Lighthouse spot checks on significant UI changes.
- Releases: Follow semantic versioning for the site assets and major config changes per Governance rules below.

## Governance

Amendments to this constitution MUST be proposed as a documented PR that explains the change, migration steps, and risks. Amendments require approval from at least two maintainers or owners before merging. Major governance changes that remove or redefine principles are a MAJOR version bump; additions of principles or material expansions are MINOR bumps; wording clarifications or typo fixes are PATCH bumps.

- Versioning policy:
	- MAJOR: Backward-incompatible governance/principle removals or redefinitions.
	- MINOR: New principle/section added or materially expanded guidance.
	- PATCH: Clarifications, wording, typo fixes, or non-semantic refinements.
- Amendment process: Propose PR → Discussion → Approval by 2 maintainers → Merge → Update `Last Amended` and bump version according to policy.
- Compliance reviews: Major changes MUST include a plan to update templates and CI gating where applicable.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown — please set | **Last Amended**: 2026-01-03
