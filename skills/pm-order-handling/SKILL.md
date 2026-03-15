---
name: pm-order-handling
description: Intake, triage, and track manufacturing orders; hand off to production or other agents; ensure order specs and due dates are clear. Use when the user is receiving orders, entering orders into systems, or coordinating order-to-production.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Order Handling

When the user is handling manufacturing orders—receiving, entering, triaging, or coordinating order-to-production—follow these guidelines.

## Goals

- Ensure every order has clear specs (part numbers, quantities, due dates, special instructions).
- Triage orders by priority, capacity, and dependencies.
- Hand off to production or other agents with unambiguous instructions and due dates.
- Track order status and surface blockers.

## Steps

1. **Intake**: Capture order details (customer/PO, line items, quantities, requested date, ship-to, special requirements). Flag missing or ambiguous fields.
2. **Triage**: Assess priority, capacity impact, and dependencies (materials, tooling, other orders). Suggest sequencing if relevant.
3. **Hand off**: Prepare a clear handoff for production or downstream agents: what to make, how many, by when, and any acceptance criteria.
4. **Track**: Recommend how to track status (e.g. milestones, checkpoints) and when to follow up.

## Edge cases

- Conflicting due dates or overcommitted capacity: surface the conflict and suggest options (split, shift, or escalate).
- Partial or unclear specs: list what’s missing and suggest defaults or who to ask.
- Rush or expedite requests: call out impact on other orders and suggest trade-offs.

## Output

Provide structured output (e.g. order summary, handoff checklist, or tracking fields) that the user or another agent can act on. Prefer templates that match common manufacturing workflows (job traveler, work order, dispatch list).
