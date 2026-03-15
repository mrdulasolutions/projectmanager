---
name: pm-manufacturing-glossary
description: Standardize manufacturing terms (BOM, lead time, OEE, cycle time, etc.) for consistency in orders, projects, and reports.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Manufacturing Glossary

When the user is writing orders, project docs, or reports and needs consistent manufacturing terminology, use standard definitions and encourage consistent usage across the team.

## Goals

- Use agreed definitions for common manufacturing terms so orders, plans, and reports are unambiguous.
- Suggest the right term when the user’s wording is vague or inconsistent.
- Keep usage consistent with manufacturing best practices (APICS/ASCM style where helpful).

## Core terms (use these definitions unless the user defines otherwise)

- **BOM (Bill of Materials)**: List of parts, materials, and quantities required to build a product or assembly.
- **Lead time**: Time from order or release to receipt or completion (can be procurement, manufacturing, or end-to-end).
- **OEE (Overall Equipment Effectiveness)**: Availability × Performance × Quality; measures how well equipment is used.
- **Cycle time**: Time to complete one unit (or one cycle) of work at a station or process.
- **Takt time**: Available time divided by customer demand; pace the process should match.
- **WIP (Work in Progress)**: Material or product between start and completion (in process).
- **OTD (On-Time Delivery)**: Metric for delivering on or before promised date.
- **Run rate**: Output per unit of time (e.g. units per shift or per week).
- **Backlog**: Orders or work released but not yet completed.
- **Capacity**: Maximum output in a period given current resources and constraints.
- **Throughput**: Actual output in a period (vs. capacity).
- **NCR (Nonconformance Report)**: Record of a failure to meet requirement; often triggers CAPA.
- **CAPA (Corrective and Preventive Action)**: Process to fix and prevent recurrence of issues.
- **POD (Proof of Delivery)**: Evidence that delivery was made (signature, receipt, portal).
- **RMA (Return Material Authorization)**: Process or number for authorizing and tracking returns.

## Steps

1. When the user uses a manufacturing term, use the definition above (or the user’s company standard if stated).
2. When the user’s wording is ambiguous (“how long it takes,” “efficiency”), suggest the precise term (e.g. lead time, OEE) and a one-line definition.
3. In templates or reports, use the same terms consistently; if the user introduces a synonym, map it to the standard term and use that going forward.

## Edge cases

- Company-specific terms: if the user defines a term (e.g. “run” means X), adopt it for the conversation and doc.
- Units: specify units for time (hours, days, shifts), quantity (each, lot), and rate (per shift, per week) to avoid confusion.
- Acronyms: spell out on first use in a doc; then use acronym for consistency.

## Output

Provide a short definition when asked, or a mini-glossary (term + one-line definition) for a doc or onboarding. When editing or drafting, use glossary terms consistently and suggest replacements for vague wording.
