#!/bin/bash
# =============================================================================
# Git HOL 3 - Branching and Merging Demo Script
# =============================================================================
# This script demonstrates creating a branch, adding files, and merging back.
# Run this inside an existing git repository (e.g., GitDemo from HOL 1).
# =============================================================================

echo "=============================================="
echo " Git HOL 3: Branching and Merging"
echo "=============================================="

# -----------------------------------------
# PART A: BRANCHING
# -----------------------------------------
echo ""
echo "===== PART A: BRANCHING ====="

echo ""
echo "--- Step 1: Verify current state ---"
git status
git log --oneline

echo ""
echo "--- Step 2: Create a new branch 'GitNewBranch' ---"
git branch GitNewBranch

echo ""
echo "--- Step 3: List all branches ---"
echo "Local and remote branches (asterisk = current):"
git branch -a

echo ""
echo "--- Step 4: Switch to GitNewBranch ---"
git checkout GitNewBranch
echo "Now on branch:"
git branch

echo ""
echo "--- Step 5: Add files to the branch ---"
echo "Feature A: User Login Module" > feature_a.txt
echo "Feature B: User Profile Module" > feature_b.txt
echo "Files created on GitNewBranch:"
ls

echo ""
echo "--- Step 6: Stage and commit on branch ---"
git add feature_a.txt feature_b.txt
git commit -m "GitNewBranch: Add feature_a and feature_b files"

echo ""
echo "--- Step 7: Check branch status and log ---"
git status
git log --oneline

# -----------------------------------------
# PART B: MERGING
# -----------------------------------------
echo ""
echo "===== PART B: MERGING ====="

echo ""
echo "--- Step 8: Switch back to master ---"
git checkout master
echo "Back on master. Listing files (feature files should NOT be visible):"
ls

echo ""
echo "--- Step 9: Show differences between master and GitNewBranch ---"
git diff master GitNewBranch

echo ""
echo "--- Step 10: Merge GitNewBranch into master ---"
git merge GitNewBranch
echo "Merge complete! Listing files (feature files should NOW be visible):"
ls

echo ""
echo "--- Step 11: View log with graph ---"
git log --oneline --graph --decorate

echo ""
echo "--- Step 12: Delete the branch ---"
git branch -d GitNewBranch
echo "Branch deleted. Remaining branches:"
git branch -a

echo ""
echo "--- Step 13: Final git status ---"
git status

echo ""
echo "=============================================="
echo " HOL 3 Complete! Branch created and merged."
echo "=============================================="
echo ""
echo "To push to remote:"
echo "  git push origin master"
