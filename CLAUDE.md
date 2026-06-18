# claude-code-loops-demo

A broken Express API that demonstrates four levels of Claude Code automation. Follow the steps below in order — each one builds on the last.

## The app

A simple shop API with three broken routes:
- `POST /users` — returns wrong status code
- `GET /orders/:id/total` — calculates total incorrectly
- `GET /search` — case-sensitive when it should not be

All three have missing input validation. There is also an unstyled `public/index.html`.

## Setup

```bash
npm install
```

## Step 1 — Start your two loops

Open Claude Code in this repo and run both of these at the start of your session:

```
/loop        ← CI babysitter: watches open PRs and fixes failing tests
```

```
/loop issue-loop        ← Issue watcher: responds to security-audit and superagent issue labels
```

Leave both running. They will fire automatically as you work through the steps below.

## Step 2 — Trigger the CI babysitter (/loop)

Make a small edit to any source file (add a comment, change a string), push it to a new branch, and open a PR:

```bash
git checkout -b fix-something
# make a small edit
git add -A && git commit -m "small change"
git push origin fix-something
gh pr create --title "Small change" --body ""
```

CI will run and fail (three test failures + a lint error). The `/loop` CI babysitter will detect the failures, read the logs, fix the source code, and push until all checks go green. Watch it work.

## Step 3 — Trigger the security audit (ultracode via issue label)

Once the PR is merged, create a new GitHub issue with the label `security-audit`:

```bash
gh issue create --title "Security audit" --body "Please audit all routes for missing input validation." --label security-audit
```

The issue loop will detect it, run an ultracode audit across all three route files in parallel, and post the findings as a comment on the issue.

## Step 4 — Trigger the superagent styling loop (ultracode + /goal via issue label)

Create a new GitHub issue with the label `superagent`. Attach a mockup image of how you want `public/index.html` to look:

```bash
gh issue create --title "Style the frontend" --body "Make it look like the attached mockup. ![mockup](URL_TO_YOUR_IMAGE)" --label superagent
```

The issue loop will detect it, extract the mockup image, and launch a full multi-model workflow: Opus orchestrates, Haiku workers implement each section, Opus judges the result, and the loop continues until the page matches the mockup. When done, it posts a comment and closes the issue.

## Repo structure

```
src/
  index.js          — Express app
  routes/
    users.js        — broken: wrong status code, no input validation
    orders.js       — broken: wrong total calculation, no input validation
    search.js       — broken: case-sensitive search, no input validation
tests/
  users.test.js
  orders.test.js
  search.test.js
public/
  index.html        — unstyled frontend
.claude/
  loop.md           — CI babysitter prompt (used by bare /loop)
  issue-loop.md     — issue watcher prompt (used by /loop issue-loop)
.github/
  workflows/
    ci.yml          — runs lint + tests on every push and PR
```
