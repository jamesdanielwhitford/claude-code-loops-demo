Check all open GitHub issues on this repo using `gh issue list`.

For each open issue:

If it has the label `security-audit`:
  Run an ultracode security audit:
  "ultracode: audit every route file in src/routes/ for missing input validation. For each gap found, report the file, the line where unvalidated input is used, and a one-line description of the missing check. Use Opus to plan the audit and judge findings. Use Haiku for the per-file workers."
  Post the findings as a comment on the issue with `gh issue comment`.

If it has the label `superagent`:
  Read the issue body and extract the target URL.
  Then run the following ultracode workflow:

  "ultracode: Redesign public/index.html to match the style and functionality of the target URL as closely as possible.

  Phase 1 — Analyse (Opus):
  Use Playwright to visit the target URL. Extract: color palette, fonts, layout structure, navigation patterns, interactive elements, and overall visual style. Also note what functionality exists (search, cart, filters, etc). Write a detailed design spec to .claude/design-spec.md.

  Phase 2 — Implement (Haiku workers, in parallel):
  Split public/index.html into sections (header, hero, product grid, footer, etc). Assign one Haiku worker per section. Each worker reads the design spec and rewrites its section to match.

  Phase 3 — Judge (Opus):
  Start the local server with `npm start`. Use Playwright to screenshot localhost and the target URL side by side. Compare layout, colors, fonts, and spacing. Test that interactive elements (search, buttons, links) behave correctly. For each section that does not match, write specific rework instructions and send back to a Haiku worker.

  Phase 4 — Loop:
  Repeat phases 2-3 until Opus judges the page matches the target URL in both style and functionality. Maximum 5 rounds.

  When complete, post a summary comment on the issue with `gh issue comment` describing what was changed, then close it with `gh issue close`."

If no issues have either label, say "no action needed" in one line.
