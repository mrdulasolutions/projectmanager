---
name: pm-project-completion
description: Close out manufacturing projects: punch lists, sign-offs, documentation, lessons learned, handoff to support or next phase. Use when the user is finishing a run, phase, or project.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Project Completion

When the user is closing out a manufacturing project—finishing a run, phase, or full project—help them with punch lists, sign-offs, documentation, lessons learned, and handoff to support or the next phase.

## Goals

- Nothing is left open: punch list items are tracked to completion and signed off.
- Documentation is in place for the next owner or phase (as-built, run report, handoff pack).
- Lessons learned are captured in a usable format.
- Handoff to support or next phase is explicit (what, to whom, when).

## Steps

1. **Punch list**: List open items (defects, missing docs, outstanding approvals). For each: owner, due date, and sign-off criteria.
2. **Sign-offs**: Identify required sign-offs (quality, engineering, customer) and draft sign-off records or checklists.
3. **Documentation**: Recommend what to document (as-built, run summary, deviations, config) and where to store it.
4. **Lessons learned**: Suggest a short format (what went well, what to improve, action items) and who should contribute.
5. **Handoff**: Define handoff package (artifacts, contacts, open items) and handoff meeting or review.

## Edge cases

- Incomplete punch list: flag items that must be closed before formal closure and suggest interim “conditional” closure with follow-up.
- Multiple stakeholders: list each stakeholder’s sign-off and preferred format (form, email, portal).
- No clear next phase: recommend a minimal handoff (docs + contact) so the project is not orphaned.

## Output

Produce a completion checklist (punch list, sign-offs, docs, lessons learned, handoff), draft text for sign-off records or lessons-learned summary, and a short handoff memo template.
