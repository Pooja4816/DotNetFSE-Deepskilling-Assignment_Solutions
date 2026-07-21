#!/bin/bash
# =============================================================================
# Git HOL 2 - Git Ignore Demo Script
# =============================================================================
# Run this script in Git Bash inside an existing git repository.
# It demonstrates how .gitignore works with .log files and log folders.
# =============================================================================

echo "=============================================="
echo " Git HOL 2: Implementing .gitignore"
echo "=============================================="

# -----------------------------------------
# STEP 1: Verify Clean Repository State
# -----------------------------------------
echo ""
echo "--- Step 1: Verify clean state ---"
git status

# -----------------------------------------
# STEP 2: Create a .log File
# -----------------------------------------
echo ""
echo "--- Step 2: Create a .log file ---"
echo "Application started at $(date)" > app.log
echo "Created app.log"
echo "Git status (app.log should be untracked):"
git status

# -----------------------------------------
# STEP 3: Create a Logs Folder
# -----------------------------------------
echo ""
echo "--- Step 3: Create a logs/ directory ---"
mkdir -p logs
echo "Server log entry 1" > logs/server.log
echo "Error log entry 1" > logs/error.log
echo "Created logs/ directory with server.log and error.log"
echo "Git status (logs/ should be untracked):"
git status

# -----------------------------------------
# STEP 4: Create .gitignore
# -----------------------------------------
echo ""
echo "--- Step 4: Create .gitignore ---"
cat > .gitignore << 'EOF'
# Ignore all .log files
*.log

# Ignore the logs directory
logs/
EOF

echo ".gitignore created with the following content:"
cat .gitignore

# -----------------------------------------
# STEP 5: Verify .gitignore Works
# -----------------------------------------
echo ""
echo "--- Step 5: Verify .gitignore works ---"
echo "Git status (only .gitignore should be shown, NOT app.log or logs/):"
git status

# -----------------------------------------
# STEP 6: Stage and Commit .gitignore
# -----------------------------------------
echo ""
echo "--- Step 6: Commit .gitignore ---"
git add .gitignore
git commit -m "HOL 2: Add .gitignore to ignore .log files and logs folder"
echo "Committed successfully!"

# -----------------------------------------
# STEP 7: Final Status
# -----------------------------------------
echo ""
echo "--- Step 7: Final git status ---"
git status

echo ""
echo "=============================================="
echo " HOL 2 Complete! .gitignore is working!"
echo "=============================================="
echo ""
echo "To push to remote, run:"
echo "  git push origin master"
