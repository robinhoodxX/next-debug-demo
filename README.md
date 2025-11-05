# next-debug-demo

Small Next.js demo to illustrate a debugging workflow.

## What this repo shows
1. **Buggy version** (commit `buggy-demo` / earlier commit)
   - `Counter` missing `use client`, causing hydration/runtime errors in NextJS app-router
   - `ApiData` had naive fetch handling

2. **Fixed version** (commit `fix-demo`)
   - `Counter` is a client component (`"use client"`) and uses safe state updates
   - `ApiData` uses `async/await`, error handling, and an `AbortController`

## How to run
