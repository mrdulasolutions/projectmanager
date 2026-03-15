---
name: pm-exchek-compliance
description: Work with ExChek agent skills for export/compliance: when to invoke classification, CSL screening, license, jurisdiction, or other exchek-* skills; hand off PM context (order, destination, product) to compliance workflows. Use when the user needs compliance checks on orders, exports, or projects, or wants to coordinate with ExChek skills from a PM workflow.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents. Works alongside ExChek skills when installed.
---

# PM ExChek Compliance

When the user needs export or trade compliance in the context of orders, projects, or shipments—and ExChek agent skills (exchek-*) are available—help decide when to invoke them and hand off PM context so compliance workflows can run correctly.

## Goals

- Identify when a compliance check is needed (e.g. new order, new destination, new product, or project involving export).
- Hand off the right PM context to ExChek skills: order/PO, destination (country/entity), product/part, and any known classification or license info.
- Recommend which ExChek skill to use (classify, CSL, license, jurisdiction, etc.) based on the question or task.
- Keep PM and compliance in sync (e.g. don’t promise ship dates before compliance is cleared).

## When to involve ExChek skills

- **New order or new destination**: Screening (e.g. exchek-csl) and jurisdiction/classification may be required before committing to ship.
- **New or changed product**: Classification (e.g. exchek-classify) may be needed; ECCN or USML category affects license and documentation.
- **License or authorization**: If the user asks about license, exception, or approval, point to exchek-license or equivalent and provide order/product/destination context.
- **Documentation**: Export docs (e.g. exchek-export-docs), recordkeeping (exchek-recordkeeping) when the user needs paperwork or audit trail.
- **Risk or red flags**: exchek-red-flag-assessment or exchek-risk-triage when the user is unsure if a situation is compliant or needs escalation.

## Steps

1. **Assess**: From the user’s question or the order/project context, determine if export/compliance is in scope (destination, product, transaction type).
2. **Choose skill**: Map the need to an ExChek skill (classify, CSL, license, jurisdiction, export-docs, recordkeeping, risk-triage, etc.). If the user doesn’t have ExChek skills installed, say so and suggest they install exchekskills or the relevant exchek-* skill.
3. **Hand off**: Summarize for the compliance skill: what is being shipped or planned, to where (country/entity), product/part and any known ECCN or classification, and what the PM needs (go/no-go, license, docs, or record).
4. **Follow-up**: After compliance output, help the PM act (e.g. hold order until cleared, attach docs to order, update project plan, or escalate).

## Edge cases

- No ExChek skills installed: Explain what ExChek skills would do and suggest installing exchekskills (or the client’s ExChek skills repo) for full compliance support.
- Urgent order: Still recommend compliance before commit; suggest expedited screening or internal escalation path.
- “We always ship to X”: Remind that each order/transaction should be checked per company policy; don’t assume past approval applies.

## Output

Provide a short recommendation (“Run CSL screening for this order/destination”; “Get classification for this part before quoting”) and a handoff summary (order ID, destination, product, and what to ask the ExChek skill). After compliance result, help the PM document and act (hold, release, document, or escalate).
