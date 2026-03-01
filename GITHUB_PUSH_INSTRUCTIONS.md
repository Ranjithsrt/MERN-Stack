# Instructions to Push Files to GitHub

Due to PowerShell execution issues, please follow these steps manually:

## Step 1: Open PowerShell or Command Prompt
Navigate to your project directory:
```powershell
cd "C:\Users\ranji\Desktop\MERN Tutor Joe's"
```

## Step 2: Initialize Git Repository (if not already done)
```bash
git init
```

## Step 3: Add Remote Repository
```bash
git remote add origin https://github.com/Ranjithsrt/MERN-Stack.git
```

If the remote already exists, remove it first:
```bash
git remote remove origin
git remote add origin https://github.com/Ranjithsrt/MERN-Stack.git
```

## Step 4: Add All Files
```bash
git add .
```

## Step 5: Commit Files
```bash
git commit -m "Initial commit: Push all MERN stack tutorial files"
```

## Step 6: Set Main Branch and Push
```bash
git branch -M main
git push -u origin main
```

## Alternative: Use the Provided Scripts

I've created two scripts for you:

1. **push_to_github.bat** - Batch file (double-click to run)
2. **push_to_github.ps1** - PowerShell script

To run the PowerShell script manually:
```powershell
cd "C:\Users\ranji\Desktop\MERN Tutor Joe's"
powershell.exe -ExecutionPolicy Bypass -File "push_to_github.ps1"
```

## Troubleshooting

If you encounter authentication issues:
- Make sure you have GitHub credentials configured
- You may need to use a Personal Access Token instead of password
- Or use SSH instead of HTTPS

If you need to use SSH:
```bash
git remote set-url origin git@github.com:Ranjithsrt/MERN-Stack.git
```

