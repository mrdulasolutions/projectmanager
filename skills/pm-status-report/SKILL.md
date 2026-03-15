---
name: pm-status-report
description: Draft or structure project/order status reports (schedule, risks, blockers, next steps) for manufacturing contexts. Use when the user asks for status updates, report templates, or executive summaries.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Status Report

When the user needs a project or order status report—for standups, leadership, or customers—help draft or structure it with schedule, risks, blockers, and next steps in a manufacturing-friendly format.

## Goals

- Consistent structure: schedule, risks, blockers, next steps (and optionally scope, budget, quality).
- Manufacturing context: use terms like OTD, run rate, WIP, backlog, capacity where appropriate.
- Right level of detail: executive summary vs. detailed rollup based on audience.
- Action-oriented: next steps have owners and dates where possible.

## Steps

1. **Gather**: From conversation or provided data, identify projects/orders in scope, key dates, current status, and known issues.
2. **Structure**: Organize into sections: Summary (1–3 lines), Schedule, Risks/Blockers, Next Steps. Add Scope/Quality/Budget if relevant.
3. **Draft**: Write clear, concise bullets. Use red/amber/green or On Track / At Risk / Off Track if the user’s org uses that.
4. **Tailor**: Shorten for execs; add detail for team or customer as needed.

## Edge cases

- Missing data: call out what’s unknown and suggest “TBD” or “confirm with X.”
- Multiple projects or orders: group by project, order, or priority; avoid one long undifferentiated list.
- Sensitive content: remind the user to sanitize for external or broad distribution.

## Output

Deliver a ready-to-paste status report (or template with placeholders). Optionally a one-line summary and a “needs attention” list for leadership.
