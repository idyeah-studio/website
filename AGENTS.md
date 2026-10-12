# Repository instructions

## Required branch and release sequence

Use this sequence for every website change:

1. Fetch and inspect `origin/develop` and `origin/main` before starting.
2. Ensure `develop` contains the current production revision. If it is behind `main`, reconcile that gap first. A local fast-forward is appropriate when possible. Do not silently skip the gap or start the feature directly from `main`.
3. Create a new `codex/` feature branch from the reconciled `develop` branch. Do not keep adding unrelated work to an old feature branch.
4. Implement and verify the change on that feature branch. Show the local preview when requested, and keep preview work local until the user approves pushing.
5. Once pushing is approved, ensure remote `develop` is reconciled too, then merge the feature into `develop` through a pull request.
6. Release through a pull request from `develop` into `main`. `main` deploys production. Never release a feature branch directly into `main`.

Before each push or pull request, check the source branch, target branch, and ancestry against this sequence. State which step is being performed. Do not force-push or rewrite shared history to repair a divergence.

## Website verification

Keep the published clean-route HTML copies consistent with their source documents in `magazine/`, using `scripts/public-pages.json` as the mapping. Run the relevant existing checks, including `node --test scripts/magazine.test.cjs` and `git diff --check`, before a release. For visual changes, inspect the desktop and portrait layouts in a browser.

Preserve unrelated local files and changes.
