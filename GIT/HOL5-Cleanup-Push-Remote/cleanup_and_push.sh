#!/bin/bash
# =============================================================================
# Git HOL 5 - Cleanup and Push to Remote Git
# =============================================================================
# This script demonstrates the final cleanup and push to remote workflow.
# Run this in Git Bash inside the GitDemo repository.
# Prerequisites: HOL 4 completed (conflict resolution done).
# =============================================================================

echo "=============================================="
echo " Git HOL 5: Cleanup and Push to Remote Git"
echo "=============================================="

# -----------------------------------------
# STEP 1: Verify master is in clean state
# -----------------------------------------
echo ""
echo "--- Step 1: Verify master is in clean state ---"
git checkout master 2>/dev/null || true
git status

# Check if there are uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "Working directory is not clean. Committing pending changes..."
    git add .
    git commit -m "Clean up before push to remote"
else
    echo "Master is clean. Proceeding..."
fi

# -----------------------------------------
# STEP 2: List all available branches
# -----------------------------------------
echo ""
echo "--- Step 2: List all available branches ---"
git branch -a
echo ""
echo "Tip: If any stale branches remain, delete them with: git branch -d <branch-name>"

# -----------------------------------------
# STEP 3: Pull from remote repository
# -----------------------------------------
echo ""
echo "--- Step 3: Pull latest from remote ---"
echo "NOTE: Update the remote URL if needed."
echo "Running: git pull origin master"
echo ""

# Uncomment the line below when you have a remote repository set up:
# git pull origin master

echo "[DEMO MODE] Skipping actual pull. In real usage, run: git pull origin master"

# -----------------------------------------
# STEP 4: Push to remote repository
# -----------------------------------------
echo ""
echo "--- Step 4: Push local changes to remote ---"
echo "Running: git push origin master"
echo ""

# Uncomment the line below when you have a remote repository set up:
# git push origin master

echo "[DEMO MODE] Skipping actual push. In real usage, run: git push origin master"

# -----------------------------------------
# STEP 5: Show final commit log
# -----------------------------------------
echo ""
echo "--- Step 5: Final commit log ---"
git log --oneline --graph --decorate
echo ""
echo "Verify these commits appear on your remote GitLab/GitHub repository."

# -----------------------------------------
# STEP 6: Summary of all branches
# -----------------------------------------
echo ""
echo "--- Step 6: Final branch status ---"
git branch -a

echo ""
echo "=============================================="
echo " HOL 5 Complete!"
echo "=============================================="
echo ""
echo "=== FULL WORKFLOW SUMMARY ==="
echo "HOL 1: Git setup, first file, push to remote"
echo "HOL 2: Git ignore - .log files and logs/"
echo "HOL 3: Branching - GitNewBranch, merge to master"
echo "HOL 4: Conflict resolution - GitWork branch, hello.xml"
echo "HOL 5: Cleanup - pull from remote, push pending commits"
echo ""
echo "All HOLs completed successfully!"
