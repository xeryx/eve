@echo off

xcopy.exe /y .\models\myModelsFile.json .\client\src\

SET PORT=3000 
npm run devstart

