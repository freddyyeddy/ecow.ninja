#!/bin/bash
git add -A
read -p "Commit Message: " Commit
git commit -am $Commit
read -p "What Branch: "  branch
git push origin $branch