---
name: pm-human-agent-coordination
description: Coordinate work between real human workers and other agents: handoffs, status from people vs. systems, clear communication so both stay aligned. Use when the user is managing mixed human/agent teams or hybrid workflows.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Human–Agent Coordination

When the user is coordinating work between real human workers and other agents (bots, tools, or AI), help design handoffs, consolidate status from people vs. systems, and keep everyone aligned.

## Goals

- Clear handoffs: humans know what to do when they receive work from an agent, and agents have the context they need from humans.
- Single view of status: combine updates from people (email, chat, verbal) and systems (APIs, dashboards) into one coherent picture.
- Communication that works for both: instructions and updates phrased so humans and agents can act on them.

## Steps

1. **Map the flow**: Identify where humans do the work and where agents do the work; mark handoff points (human→agent, agent→human).
2. **Handoff format**: At each handoff, define inputs and outputs: what the receiver needs (e.g. order ID, due date, exception flag) and in what format (form, message, ticket).
3. **Status**: Define how status is collected from humans (check-in, form, reply) and from agents (API, log, report); suggest a simple way to merge them (e.g. one table or standup summary).
4. **Exceptions**: When something is blocked or off-spec, who does the human contact? Who does the agent notify? Make escalation paths explicit.

## Edge cases

- Ambiguous ownership: if both human and agent could do a step, recommend one and document why (e.g. “human for quality sign-off”).
- Status conflicts: if human says “done” but system says “in progress,” suggest a single source of truth or reconciliation step.
- Language/tone: when drafting messages for humans, use natural language; when structuring data for agents, use consistent fields and codes.

## Output

Produce handoff specs (who, what, format, due when), a simple status merge template, and optional escalation rules. Keep it practical for manufacturing (orders, jobs, batches, sign-offs).
