---
name: pm-post-order-follow-up
description: Follow up after order delivery: delivery confirmation, quality feedback, returns or issues, customer/sales follow-up. Use when the user needs to confirm delivery, handle post-ship issues, or close the order loop.
license: Proprietary. MR Dula Enterprise, LLC. See skills/LICENSE.md.
metadata:
  author: MR Dula Enterprise, LLC
  version: "1.0"
compatibility: Cursor, Claude Code, Claude desktop, and other agentskills.io-compatible agents
---

# PM Post-Order Follow-up

When the user needs to follow up after an order has been delivered—confirm delivery, collect quality feedback, handle returns or issues, or close the loop with customer/sales—use this skill.

## Goals

- Confirm delivery (received, on time, condition) and document it.
- Capture quality feedback and any defects or nonconformances; route to correct owner.
- Handle returns or claims with clear steps and documentation.
- Close the order loop with customer or sales (satisfaction, repeat order, lessons learned).

## Steps

1. **Delivery confirmation**: Draft or structure a delivery confirmation (date, quantity, condition, POD if applicable). Suggest how to record it (ERP, CRM, or order file).
2. **Quality feedback**: If the user has feedback (good or bad), categorize it (on-spec, defect, delay, packaging) and suggest next steps (NCR, CAPA, thank-you, or no action).
3. **Returns/issues**: For returns or claims, outline steps: acknowledge, document (RMA, photos, reason), assign owner, and track to resolution. Draft short customer-facing messages if needed.
4. **Close the loop**: Suggest a short close-out (customer satisfied? order complete in system? any follow-up sale or feedback request?) and where to record it.

## Edge cases

- No formal POD: suggest alternative confirmation (email, portal, signed slip) and how to file it.
- Recurring quality issues: recommend aggregating by order/product and escalating to quality or engineering.
- Customer unresponsive: suggest a cutoff after N follow-ups and how to mark the order “closed pending confirmation.”

## Output

Provide templates or drafts for delivery confirmation, quality feedback capture, return/claim workflow, and order close-out. Use manufacturing-friendly terms (OTD, NCR, RMA, etc.) where appropriate.
