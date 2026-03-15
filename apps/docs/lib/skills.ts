export const SKILLS = [
  { slug: "pm-order-handling", name: "Order handling", description: "Intake, triage, and track manufacturing orders; hand off to production or other agents." },
  { slug: "pm-project-oversight", name: "Project oversight", description: "Oversee manufacturing projects: scope, schedule, resources, risks and bottlenecks." },
  { slug: "pm-delegate-follow-up", name: "Delegate & follow-up", description: "Delegate tasks to humans or agents with clear assignee, due date, and follow-up." },
  { slug: "pm-follow-up", name: "Follow-up", description: "Proactive follow-up on open items, late deliverables, and overdue commitments." },
  { slug: "pm-human-agent-coordination", name: "Human–agent coordination", description: "Coordinate work between real human workers and other agents." },
  { slug: "pm-project-completion", name: "Project completion", description: "Close out projects: punch lists, sign-offs, documentation, lessons learned." },
  { slug: "pm-post-order-follow-up", name: "Post-order follow-up", description: "Follow up after delivery: confirmation, quality feedback, returns, customer follow-up." },
  { slug: "pm-status-report", name: "Status report", description: "Draft or structure project/order status reports for manufacturing contexts." },
  { slug: "pm-manufacturing-glossary", name: "Manufacturing glossary", description: "Standardize manufacturing terms (BOM, lead time, OEE, etc.)." },
  { slug: "pm-exchek-compliance", name: "ExChek compliance", description: "Work with ExChek agent skills for export/compliance from PM workflows." },
] as const;

export type SkillSlug = (typeof SKILLS)[number]["slug"];
