#!/bin/bash
# =============================================================================
# Git HOL 4 - Merge Conflict Resolution Demo Script
# =============================================================================
# This script simulates a merge conflict scenario.
# Run this in Git Bash inside the GitDemo repository from HOL 1.
# =============================================================================

echo "=============================================="
echo " Git HOL 4: Merge Conflict Resolution"
echo "=============================================="

# -----------------------------------------
# STEP 1: Verify master is clean
# -----------------------------------------
echo ""
echo "--- Step 1: Verify master is clean ---"
git checkout master 2>/dev/null || true
git status

# -----------------------------------------
# STEP 2: Create branch 'GitWork' and add hello.xml
# -----------------------------------------
echo ""
echo "--- Step 2: Create 'GitWork' branch ---"
git checkout -b GitWork

echo "Creating hello.xml on GitWork branch..."
cat > hello.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<hello>
    <message>Hello from GitWork Branch</message>
    <author>Developer A</author>
    <branch>GitWork</branch>
</hello>
EOF
echo "Content of hello.xml on GitWork:"
cat hello.xml

# -----------------------------------------
# STEP 3: Commit on GitWork branch
# -----------------------------------------
echo ""
echo "--- Step 3: Commit on GitWork branch ---"
git add hello.xml
git commit -m "GitWork: Add hello.xml with branch content"
git status

# -----------------------------------------
# STEP 4: Switch to master
# -----------------------------------------
echo ""
echo "--- Step 4: Switch to master ---"
git checkout master

# -----------------------------------------
# STEP 5: Create DIFFERENT hello.xml on master
# -----------------------------------------
echo ""
echo "--- Step 5: Create different hello.xml on master ---"
cat > hello.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<hello>
    <message>Hello from Master Branch</message>
    <author>Developer B</author>
    <branch>master</branch>
</hello>
EOF
echo "Content of hello.xml on master:"
cat hello.xml

# -----------------------------------------
# STEP 6: Commit to master
# -----------------------------------------
echo ""
echo "--- Step 6: Commit hello.xml to master ---"
git add hello.xml
git commit -m "master: Add hello.xml with master content"

# -----------------------------------------
# STEP 7: View log
# -----------------------------------------
echo ""
echo "--- Step 7: View log (diverging branches) ---"
git log --oneline --graph --decorate --all

# -----------------------------------------
# STEP 8: View CLI differences
# -----------------------------------------
echo ""
echo "--- Step 8: Differences between master and GitWork ---"
git diff master GitWork

# -----------------------------------------
# STEP 9: Attempt merge (WILL CONFLICT!)
# -----------------------------------------
echo ""
echo "--- Step 9: Merge GitWork into master (EXPECT CONFLICT!) ---"
git merge GitWork || true

echo ""
echo "Content of hello.xml with conflict markers:"
cat hello.xml

# -----------------------------------------
# STEP 10: Manually resolve the conflict
# -----------------------------------------
echo ""
echo "--- Step 10: Resolving conflict manually ---"
cat > hello.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!-- RESOLVED: Combined content from both master and GitWork branches -->
<hello>
    <message>Hello from Resolved Merge</message>
    <master_message>Hello from Master Branch</master_message>
    <branch_message>Hello from GitWork Branch</branch_message>
    <author_master>Developer B</author_master>
    <author_branch>Developer A</author_branch>
    <resolution>Manually resolved using 3-way merge</resolution>
</hello>
EOF
echo "Resolved hello.xml:"
cat hello.xml

# -----------------------------------------
# STEP 11: Commit the resolved conflict
# -----------------------------------------
echo ""
echo "--- Step 11: Commit resolved conflict ---"
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml between master and GitWork"

# -----------------------------------------
# STEP 12: Update .gitignore for .orig files
# -----------------------------------------
echo ""
echo "--- Step 12: Add *.orig to .gitignore ---"
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Update .gitignore to ignore merge backup .orig files"

# -----------------------------------------
# STEP 13: List and delete branch
# -----------------------------------------
echo ""
echo "--- Step 13: List all branches ---"
git branch -a

echo ""
echo "--- Deleting GitWork branch ---"
git branch -d GitWork

# -----------------------------------------
# STEP 14: Final log
# -----------------------------------------
echo ""
echo "--- Step 14: Final log with graph ---"
git log --oneline --graph --decorate

echo ""
echo "=============================================="
echo " HOL 4 Complete! Conflict resolved and merged."
echo "=============================================="
echo ""
echo "To push to remote:"
echo "  git push origin master"
