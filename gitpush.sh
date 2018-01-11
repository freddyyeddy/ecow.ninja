#!/bin/bash
git add -A
git commit -am "Removal Of CodeAnywhere Test"
read -p "What Branch: "  branch
git push origin $branch