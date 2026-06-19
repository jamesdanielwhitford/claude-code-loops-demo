Check the open pull request on this repo using the GitHub CLI.

Run: gh pr list --state open --limit 1

If there are no open PRs, say so and wait for the next iteration.

If there is an open PR:
- Get all review comments with: gh pr view <number> --comments
- For each comment that describes a problem or requests a change:
  - Fix the minimal code needed to address it in src/
  - Do not modify tests
  - Commit the fix to the PR branch with a short message describing what you fixed
  - Push it with: git push origin <branch>
- After fixing, say which comments you addressed and what you changed

Do not open new PRs. Do not merge. Only address review comments on the existing open PR.
