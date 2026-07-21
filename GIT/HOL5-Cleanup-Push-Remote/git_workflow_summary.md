# Git Commands - Complete Reference (HOL 1-5 Summary)

## HOL 1: Git Setup and First Repository

```bash
# Check Git version
git --version

# Configure user identity
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# View all configuration
git config --list

# Set default editor
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"

# Initialize a repository
git init

# List files including hidden
ls -la

# Create a file
echo "content" > filename.txt

# Check status
git status

# Stage a file
git add filename.txt

# Stage all files
git add .

# Commit with message
git commit -m "Your commit message"

# Add remote origin
git remote add origin https://gitlab.com/username/repo.git

# Pull from remote
git pull origin master

# Push to remote
git push origin master
```

---

## HOL 2: Git Ignore

```bash
# Create .gitignore
touch .gitignore

# Common .gitignore patterns
# *.log         -> ignore all .log files
# logs/         -> ignore logs folder
# *.orig        -> ignore merge backup files
# build/        -> ignore build folder

# Check what's being ignored
git status --ignored
```

---

## HOL 3: Branching and Merging

```bash
# Create a branch
git branch GitNewBranch

# List branches (local)
git branch

# List all branches (local + remote)
git branch -a

# Switch to a branch
git checkout GitNewBranch

# Create and switch in one command
git checkout -b NewBranch

# View differences between branches
git diff master GitNewBranch

# Visual diff with P4Merge
git difftool master GitNewBranch

# Merge a branch into current (master)
git checkout master
git merge GitNewBranch

# View commit log with graph
git log --oneline --graph --decorate

# Delete a merged branch
git branch -d GitNewBranch
```

---

## HOL 4: Conflict Resolution

```bash
# Check for conflicts after merge
git status

# View conflict markers in file
cat hello.xml

# Use merge tool (P4Merge)
git mergetool

# After resolving conflict:
git add hello.xml
git commit -m "Resolve merge conflict"

# View log with all branches
git log --oneline --graph --decorate --all

# Force delete branch
git branch -D GitWork
```

---

## HOL 5: Cleanup and Push to Remote

```bash
# Verify clean state
git status

# Pull before push (always!)
git pull origin master

# Push to remote
git push origin master

# Push a specific branch
git push origin <branch-name>

# Delete remote branch
git push origin --delete <branch-name>

# View remote info
git remote -v
```

---

## Quick Reference Table

| Command | Purpose |
|---------|---------|
| `git init` | Initialize new repo |
| `git clone <url>` | Clone remote repo |
| `git status` | Check working directory state |
| `git add <file>` | Stage specific file |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Commit with message |
| `git log --oneline` | View compact commit history |
| `git branch` | List local branches |
| `git checkout -b <name>` | Create + switch to branch |
| `git merge <branch>` | Merge branch into current |
| `git pull origin master` | Fetch + merge from remote |
| `git push origin master` | Push local commits to remote |
| `git diff` | View unstaged changes |
| `git mergetool` | Open visual merge tool |
