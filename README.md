# claude-code-loops-demo

A broken Express API used in the [How to Write Loops in Claude Code](https://techstackups.com/guides/how-to-write-loops-claude-code/) guide on [techstackups.com](https://techstackups.com).

## The demo

This repo has three failing tests and a lint error. Clone it, open `fix-api` in Claude Code, and use `/loop` to fix CI until it goes green.

```bash
git clone https://github.com/ritza-co/claude-code-loops-demo
cd claude-code-loops-demo
```

Then in Claude Code:

```
/loop Check the CI status on the fix-api PR and fix any failing tests or lint errors. Stop when CI passes.
```

## Running locally

```bash
npm install
npm test
npm run lint
```
