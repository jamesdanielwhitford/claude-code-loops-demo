# claude-code-loops-demo

A broken Express API used in the [Claude Code loops tutorial](https://simpletechguides.dev).

## The demo

This repo has three failing tests and a lint error. Clone it, open `fix-api` in Claude Code, and use `/loop` to fix CI until it goes green.

```bash
git clone https://github.com/jamesdanielwhitford/claude-code-loops-demo
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
