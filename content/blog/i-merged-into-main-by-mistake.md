---
title: "I merged into main by mistake. Here's how I rescued my live site"
date: "2026-11-28"
summary: "A wrong pull request put my half-finished redesign live. How I rolled back with git reset, a safe force-push and Vercel, and what I changed so it can't happen again."
tags: ["git", "github", "vercel", "workflow"]
draft: true
---

I was redesigning my portfolio on a `develop` branch, keeping `main` clean and live. Then I opened a small pull request, clicked merge, and a few minutes later my live site was showing an unfinished redesign.

Here is what happened, how I fixed it, and what I changed in my workflow.

## What went wrong

My fix branch was created from `develop`. When I opened the pull request on GitHub, the **base branch defaulted to `main`**, and I didn't check it. Merging it didn't just bring my one fix into `main`: it brought **every commit from `develop`**, including the whole half-finished redesign.

Vercel deploys `main` automatically, so the unfinished site went live.

## Step 1: save the work first

Before touching `main`, I made sure nothing could be lost. My fix commit only existed on `main` now, so I brought it into `develop`:

```bash
git checkout develop
git merge main      # fast-forward: develop gets the fix
git push
```

Now `develop` had everything, safely on GitHub.

## Step 2: move main back

I found the last good commit on `main` (my previous production release) and reset to it:

```bash
git checkout main
git reset --hard <last-good-commit>
```

`reset --hard` moves the branch back and throws away the commits after it, **on main only**. They still existed on `develop`.

## Step 3: update GitHub safely

GitHub's `main` still had the bad commits, so a normal push was refused. I used:

```bash
git push --force-with-lease
```

`--force-with-lease` is the safe version of `--force`: it refuses to overwrite the remote if someone else pushed in the meantime. You should almost never force-push `main`, but as the only person on the repository, rolling back a mistake was the right call.

## Step 4: the surprise on Vercel

GitHub was fixed, but the live site still showed the redesign. Vercel had already built that old commit months ago and didn't rebuild it. The fix was in the dashboard: **Deployments → the old production deployment → Promote to Production.** The live site was back in seconds.

## What I changed so it can't happen again

- **Check the base branch on every pull request.** It's now a habit, not an afterthought.
- **Protect `main` on GitHub**, so it requires a pull request.
- **Make `develop` the default branch**, so new pull requests target it automatically.

## The lesson

Git mistakes feel scary, but almost nothing is truly lost. The calm order is: **save the work, move the branch, push safely, then check the deployment.**