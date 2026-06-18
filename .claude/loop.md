Check all open pull requests on this repo using the GitHub CLI.

For each PR:
- Get the latest CI status with `gh pr checks <number>`
- If CI is failing, fetch the failing job log with `gh run view --log-failed`
- Read the test output, identify the root cause, fix the minimal code needed to make it pass
- Commit and push the fix to the PR branch
- If CI is passing, say so in one line

Do not open new PRs. Do not modify tests. Only fix the source code in src/.
