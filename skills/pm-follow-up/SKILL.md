---
name: pm-follow-up
description: Proactive follow-up on open items: outstanding tasks, late deliverables, missing inputs, overdue commitments from humans or systems. Use when the user needs to chase status, send reminders, or close loops.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Follow-up

When the user needs to follow up on open items—outstanding tasks, late deliverables, missing inputs, or overdue commitments from humans or systems—help them chase status, draft reminders, and close loops.

## Goals

- Identify what’s open, late, or blocking.
- Draft clear, professional follow-up messages (email, chat, or ticket updates).
- Suggest escalation or workarounds when follow-up doesn’t resolve the issue.
- Close loops by confirming receipt or completion where possible.

## Steps

1. **List open items**: From context (conversation, list, or summary), list tasks or commitments that are outstanding or overdue. Note assignee, due date, and impact.
2. **Prioritize**: Order by impact and urgency (e.g. blocking production vs. nice-to-have).
3. **Draft follow-up**: For each item (or a short list), draft a concise follow-up: what you need, by when, and why it matters. Tone: professional and direct; avoid blame.
4. **Escalation**: If something is repeatedly late or unresponsive, suggest next step (escalate to manager, replan, or workaround).

## Edge cases

- No clear assignee: suggest who might own it based on role or past context, or recommend clarifying ownership first.
- Multiple open items: group by owner or project so the user can send batched follow-ups.
- Sensitive or confidential: remind the user to keep sensitive details out of shared channels; suggest 1:1 or secure channel.

## Output

Deliver a short open-items list and ready-to-send follow-up text (or bullet points) the user can copy into email, Slack, or a ticket. Optionally a one-line “if no response by X, then Y” escalation note.
