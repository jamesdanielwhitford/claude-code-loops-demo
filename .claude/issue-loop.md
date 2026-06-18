Check all open GitHub issues on this repo using `gh issue list`.

For each open issue:

If it has the label `security-audit`:
  Run an ultracode security audit:
  "ultracode: audit every route file in src/routes/ for missing input validation. For each gap found, report the file, the line where unvalidated input is used, and a one-line description of the missing check. Use Opus to plan the audit and judge findings. Use Haiku for the per-file workers."
  Post the findings as a comment on the issue with `gh issue comment`.

If it has the label `superagent`:
  Read the issue body. Extract any attached image URL (the mockup).
  Then run:
  "ultracode: rework public/index.html to match the attached mockup image as closely as possible. Use Opus as the orchestrator and judge. Use Haiku for implementation workers. Each worker handles one section of the page. After each round, Opus compares the rendered page to the mockup and sends failing sections back for rework. Stop when Opus judges the page matches the mockup."
  Post a comment on the issue when done with `gh issue comment`, then close it with `gh issue close`.

If no issues have either label, say "no action needed" in one line.
