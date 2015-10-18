@echo off

set CURR_DIR=%~dp0
set INSTALL_DIR=%CURR_DIR%bin\tmtest\

node install.js

echo Starting Telerik Mobile Testing...
node "%INSTALL_DIR%tmtest.js" server --launch-test-runner

if ERRORLEVEL 1 (
	echo.
	pause
)