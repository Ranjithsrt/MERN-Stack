@echo off
cd /d "C:\Users\ranji\Desktop\MERN Tutor Joe's"

REM Initialize git repository if not already initialized
if not exist .git (
    git init
)

REM Add remote if not already added
git remote remove origin 2>nul
git remote add origin https://github.com/Ranjithsrt/MERN-Stack.git

REM Add all files
git add .

REM Commit changes
git commit -m "Initial commit: Push all MERN stack tutorial files"

REM Push to GitHub
git branch -M main
git push -u origin main

pause

