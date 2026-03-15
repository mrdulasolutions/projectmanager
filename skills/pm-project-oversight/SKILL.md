---
name: pm-project-oversight
description: Oversee manufacturing projects: scope, schedule, resources, dependencies; surface risks and bottlenecks. Use when the user is running a production run, new product launch, or capital project.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Project Oversight

When the user is overseeing a manufacturing project—production run, new product launch, or capital project—help them maintain scope, schedule, resources, and dependencies and surface risks and bottlenecks.

## Goals

- Keep scope, schedule, and resources visible and aligned.
- Identify dependencies (internal and external) and critical path items.
- Surface risks and bottlenecks early.
- Suggest corrective actions or escalation when needed.

## Steps

1. **Scope**: Clarify deliverables, acceptance criteria, and out-of-scope items. Flag scope creep.
2. **Schedule**: Map milestones, key dates, and dependencies. Call out critical path and slack.
3. **Resources**: Identify people, equipment, and materials; flag shortages or overallocation.
4. **Risks & bottlenecks**: List known risks and bottlenecks with impact and mitigation or escalation.

## Edge cases

- Slipping dates: quantify impact and suggest recovery options (fast-tracking, scope trim, or replan).
- Resource conflicts: name the conflict and suggest trade-offs or prioritization.
- External dependencies: make handoffs and due dates explicit; suggest follow-up cadence.

## Output

Provide concise project health (e.g. status, top risks, next critical actions) suitable for standups or leadership. Use manufacturing-friendly terms (run rate, OTD, WIP, etc.) where appropriate.
