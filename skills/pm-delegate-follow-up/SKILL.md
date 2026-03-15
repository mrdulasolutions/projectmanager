---
name: pm-delegate-follow-up
description: Delegate tasks to human workers or other agents (clear assignee, due date, acceptance criteria) and structure follow-up (check-ins, escalation paths). Use when the user needs to assign work, hand off to people or bots, or set up follow-up.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Delegate & Follow-up

When the user needs to delegate work to human workers or other agents, help them define clear assignments and structure follow-up so nothing falls through the cracks.

## Goals

- Every delegated task has an assignee, due date, and acceptance criteria.
- Follow-up (check-ins, escalation) is explicit and time-bound.
- Handoffs to people vs. agents are clearly distinguished where it matters.

## Steps

1. **Define the task**: What exactly is to be done, in what format, and what “done” looks like (acceptance criteria).
2. **Assign**: Who is responsible (person or agent)? When is it due? What do they need (inputs, access, context)?
3. **Follow-up**: When will the PM check in? What happens if it’s late or blocked? Who to escalate to?
4. **Handoff**: If delegating to an agent, provide enough context (order ID, project, constraints) for the agent to execute.

## Edge cases

- Vague assignee (“the team”): ask for a single responsible party or suggest one based on context.
- No due date: suggest one based on project or order dates and flag if it’s at risk.
- Recurring or multi-step work: break into concrete tasks with assignees and dates; suggest a simple tracking format (list, table, or checklist).

## Output

Produce delegation records the user can paste into email, tickets, or tools: task, assignee, due date, acceptance criteria, and follow-up plan (check-in date, escalation path).
