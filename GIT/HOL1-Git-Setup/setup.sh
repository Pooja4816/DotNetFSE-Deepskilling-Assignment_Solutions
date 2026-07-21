#!/bin/bash
# =============================================================================
# Git HOL 1 - Automated Setup Script
# =============================================================================
# This script demonstrates all the Git commands from HOL 1.
# Run it in Git Bash step by step.
# =============================================================================

echo "=============================================="
echo " Git HOL 1: Setup, Configuration & Repository"
echo "=============================================="

# -----------------------------------------
# STEP 1: Verify Git Installation
# -----------------------------------------
echo ""
echo "--- Step 1: Verify Git Installation ---"
git --version

# -----------------------------------------
# STEP 2: Configure User Identity
# Replace with your own name and email
# -----------------------------------------
echo ""
echo "--- Step 2: Configure User Identity ---"
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"

echo "Git configuration set. Verifying..."
git config --list

# -----------------------------------------
# STEP 3: Set Notepad++ as Default Editor
# Adjust path if installed elsewhere
# -----------------------------------------
echo ""
echo "--- Step 3: Set Default Editor ---"
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
echo "Editor configured. Verifying global config..."
git config --global core.editor

# -----------------------------------------
# STEP 4: Create Local Repository
# -----------------------------------------
echo ""
echo "--- Step 4: Create Local Repository ---"
mkdir -p GitDemo
cd GitDemo
git init
echo "Listing hidden files to verify .git folder:"
ls -la

# -----------------------------------------
# STEP 5: Create and Commit a File
# -----------------------------------------
echo ""
echo "--- Step 5: Create welcome.txt ---"
echo "Welcome to Git Demo" > welcome.txt
echo "File created. Content:"
cat welcome.txt

echo ""
echo "Checking Git status (file is untracked):"
git status

echo ""
echo "Staging the file:"
git add welcome.txt
git status

echo ""
echo "Committing with inline message:"
git commit -m "Initial commit: Add welcome.txt"

echo ""
echo "Verifying commit log:"
git log --oneline

# -----------------------------------------
# STEP 6: Push to Remote (Manual steps)
# -----------------------------------------
echo ""
echo "--- Step 6: Push to Remote GitLab ---"
echo "NOTE: Update the URL below with your actual GitLab repository URL"
echo ""
echo "Commands to run manually:"
echo "  git remote add origin https://gitlab.com/your-username/GitDemo.git"
echo "  git pull origin master"
echo "  git push origin master"
echo ""
echo "=============================================="
echo " HOL 1 Setup Script Completed!"
echo "=============================================="
