# claude-code-loops-demo

A small Express API with three broken routes and three failing tests. Used in the [How to Write Loops in Claude Code](https://techstackups.com/guides/how-to-write-loops-claude-code/) guide.

## The app

Three routes:
- `POST /users` — returns wrong status code (200 instead of 201)
- `GET /orders/:id/total` — calculates total incorrectly (multiplies by 2 instead of quantity)
- `GET /search` — case-sensitive when it should not be

All three are also missing input validation.

## Setup

```bash
npm install
npm test   # three tests fail
```

## What the loop demos use

- `.claude/loop.md` — PR-watching prompt. Bare `/loop` picks this up automatically.
- `src/routes/` — the broken source files. The loop only edits these, never tests.
- `tests/` — three failing tests. Fixed by `/goal` in demo 2.
