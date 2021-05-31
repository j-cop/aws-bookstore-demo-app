
call npm install
call npm run build
python IDcheck.py
if errorlevel 1 (
    exit /b %errorlevel%
)



REM Dont put anything below this!
cd ..
git add .
git commit -m %1
git push origin master