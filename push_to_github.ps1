Set-Location -LiteralPath 'C:\Users\ranji\Desktop\MERN Tutor Joe''s'

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    git init
}

# Add remote if not already added
git remote remove origin 2>$null
git remote add origin https://github.com/Ranjithsrt/MERN-Stack.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Push all MERN stack tutorial files"

# Push to GitHub
git branch -M main
git push -u origin main

Write-Host "Done! Files pushed to GitHub."

