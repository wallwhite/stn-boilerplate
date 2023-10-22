#!/bin/bash

git add *
git stash

BRANCH_NAME="s2-step-$1"
git checkout $BRANCH_NAME
