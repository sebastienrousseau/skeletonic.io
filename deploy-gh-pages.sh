#!/bin/sh
#
#  ____  _        _      _              _        ____
# / ___|| | _____| | ___| |_ ___  _ __ (_) ___  |  _ \  ___   ___ ___
# \___ \| |/ / _ \ |/ _ \ __/ _ \| '_ \| |/ __| | | | |/ _ \ / __/ __|
#  ___) |   <  __/ |  __/ || (_) | | | | | (__  | |_| | (_) | (__\__ \
# |____/|_|\_\___|_|\___|\__\___/|_| |_|_|\___| |____/ \___/ \___|___/
#
# Skeletonic Stylus Documentation v0.0.1
# https://docs.skeletonic.io/en
#
# Deployment script to push Jekyll site content to the gh-pages branch.
#
# This deployment script has the following functions:
#
#   deployAll ():
#     - Run all the commands chronologically.
#
#   deployRemove ():
#     - Remove the _site folder.
#
#   deployCommit ():
#     - Getting the latest commit in main branch.
#
#   deployClone ():
#     - Cloning the remote site gh-pages branch.
#
#   deployBuild (): 
#     - Build Production _site
#
#   deploySwitch: 
#     - Switch directory to _site
#
#   deployCommitMsg ():
#     - Defining the commit message.
#
#   deployAdd (): 
#     - Add new or changed files in site working directory to the Git staging area.
#
#   deployCommitChanges ():
#     - Commit the changes to the to gh-pages branch.
#
#   deployPush ():
#     - Push the changes to the gh-pages branch.
#
#   deployHelp ():
#     - Present the Help Menu.
#
# Copyright (c) Sebastien Rousseau 2021. All rights reserved
# Licensed under the MIT license
#

# Load configuration files
# shellcheck disable=SC2154
# shellcheck disable=SC2039
# shellcheck disable=SC1094
# shellcheck disable=SC3046
# shellcheck disable=SC1091
source "tools/en/skeletonic-colors-en.sh"
source "tools/en/skeletonic-utilities-en.sh"
source "tools/en/skeletonic-variables-en.sh"

# 1) deployRemove: Remove the _site folder.
deployRemove () {
    echo "${Yellow}[WARNING]${Reset} Removing the _site folder." 
    rm -rf _site
    echo
}

# 2) deployCommit: Getting the latest commit in main branch.
deployCommit () {
  echo
  echo "${Blue}[INFO]${Reset} Getting the latest commit in main branch."
  commit=$(git log -n 1 --pretty='format:%C(auto)%h (%s, %ad)')
  echo "[Commit]: ${commit}"
  echo
}

# 3) deployClone: Cloning the remote site gh-pages branch.
deployClone () {
  echo
  echo "${Blue}[INFO]${Reset} Cloning the remote site gh-pages branch."
  git clone -b gh-pages https://github.com/sebastienrousseau/skeletonic.io.git gh-pages _site
  echo
}

# 4) deployBuild: Build Production _site
deployBuild () {
  echo
  echo "${Blue}[INFO]${Reset} Building the Production _site."
  JEKYLL_ENV=production bundle exec jekyll build
  echo
}

# 5) deploySwitch: Switch directory to _site
deploySwitch () {
  echo
  echo "${Blue}[INFO]${Reset} Switch directory to _site."
  cd _site || exit
  echo
}

# 6) deployCommitMsg: Defining the commit message.
deployCommitMsg () {
  echo
  echo "${Blue}[INFO]${Reset} Defining the commit message"
  message="Deploying commit $commit to gh-pages"
  echo "[Warning]: ${message}."
  echo
}

# 7) deployAdd: Add new or changed files in site working directory to the Git staging area.
deployAdd () {
  echo
  echo "${Blue}[INFO]${Reset} Add new or changed files in site working directory to the Git staging area."
  git add .
  echo
}

# 8) deployCommitChanges: Commit the changes to the to gh-pages branch.
deployCommitChanges () {
  echo
  echo "${Blue}[INFO]${Reset} Commit the changes to the to gh-pages branch"
  git commit -m "$message" > /dev/null 2>&1
  echo
}

# 9) deployPush: Push the changes to the gh-pages branch.
deployPush () {
  echo
  echo "${Blue}[INFO]${Reset} Push the changes to the gh-pages branch."
  git push origin gh-pages
  echo "[Success]: Deployment successful of v1.0.$VERSION to gh-pages"
  echo
}

# 10) deployHelp: Present the Help Menu.
deployHelp() {  
  echo
  echo "${Green}   ┌ ${Green}Skeletonic Stylus${Reset} ${Green}────────────────────────────────┐${Reset}" 
  echo "${Green}   │                                                   │${Reset}" 
  echo "${Green}   │ ${Green}  Deployment scripts!${Reset}                             ${Green}│${Reset}" 
  echo "${Green}   │                                                   │${Reset}" 
  echo "${Green}   └───────────────────────────────────────────────────┘${Reset}"
  echo
  echo "${Blue}[INFO]${Reset} ${White}Available options:${Reset}"
  echo "
  ${Green}[0]${Reset}   Exit menu.
  ${Green}[1]${Reset}   Run all the commands chronologically.
  ${Green}[2]${Reset}   Remove the _site folder.
  ${Green}[3]${Reset}   Getting the latest commit in main branch.
  ${Green}[4]${Reset}   Cloning the remote site gh-pages branch.
  ${Green}[5]${Reset}   Build Production _site
  ${Green}[6]${Reset}   Switch directory to _site
  ${Green}[7]${Reset}   Defining the commit message.
  ${Green}[8]${Reset}   Add new or changed files in site working directory to the Git staging area.
  ${Green}[9]${Reset}   Commit the changes to the to gh-pages branch.
  ${Green}[10]${Reset}  Push the changes to the gh-pages branch.
  ${Green}[11]${Reset}  Help menu."
  echo
  echo "${Blue}[INFO]${Reset} ${Yellow}Choose an option and press [ENTER]:${Reset}" 
  read -r a
    case $a in
      0)  exit 0 ;;
      1)  deployRemove ; deployHelp ;;   
      2)  deployCommit ; deployHelp ;;
      3)  deployClone ; deployHelp ;;
      4)  deployBuild ; deployHelp ;;
      5)  deploySwitch ; deployHelp ;;
      6)  deployCommitMsg ; deployHelp ;;
      7)  deployAdd ; deployHelp ;;
      8)  deployCommitChanges ; deployHelp ;;
      9)  deployPush ; deployHelp ;;   
      10) deployHelp ;;
  *) echo "${Red}[ERROR]${Reset} Wrong option.";;
  esac
}

deployHelp
