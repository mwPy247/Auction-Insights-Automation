# Auction-Insights-Automation
A script that automates Google Ads auction insights reports using the Google Sheets and Google Drive API's for use in any BI tool (DataStudio, Tableau, Power BI,...). Written in JavaScript.

## Motivation
Google Ads provides detailed custom reports for comparing how often you win bets on certain keywords ("auctions") against your competitors (if you are interested: for more information click [here](https://www.youtube.com/watch?v=xjgDWOXXmtc) or [here](https://support.google.com/google-ads/answer/2579754?hl=en)). These reports are of high value to campaign managers who want to optimize their bidding strategy and who ultimately want to employ their limited budget with a higher leverage. 
##### The problem
Unfortunately, up to this point these reports can only be accessed from within the Google Ads user interface, which makes it complicated to create custom reports in data visualization tools like Google Data Studio, Power BI or Tableau. This Script makes it possible to bring your data from Google Ads to your preferred BI Tool, while updating your data automatically in regular intervals. Once set-up, the script will take care of the rest and you can concentrate on optimizing your campaigns and/or reports.

## How it works
1. The data is exported automatically from Google Ads to Google Drive. This is accomplished by an automatic export function provided by Google Ads. This function can be set-up such that the data is exported in regular time intervals. It is saved in a custom folder you specify manually as you set-up your Script and is a Google Sheets file itself. You may export as many Google Sheets files to your folder as you like. 
2. The script scans all the Google Sheets files from your folder and consolidates them in one Google Sheet file, where you can add additional marketing data (for example CPC- and CPA-values) as you like. 
3. You connect your BI-Tool with the Google Sheet and display your data.

##### Overview: Diagram
The diagram below summarizes how the script works:

![diagram (2)](https://user-images.githubusercontent.com/69138900/109516707-c7cb0e80-7aa8-11eb-9f16-8ac15a18de8d.jpg)

## Prerequisites
- A Google Account. In particular: Access to Google Sheets, Google Drive and the Google Scriptmanager.
- A [Sheets Template](https://docs.google.com/spreadsheets/d/1tE4iAT9wNRYPmf5za7IYr-LiGHYBecBqTY0UvPGVpyo/edit?usp=sharing).
- A Folder in Google Drive.

## Set-up
- Setup the automatic export planning of your Auction Insights Reports inside the Google Ads Interface.
- Setup your Google Sheets Template and copy/paste script.txt to the respective Scriptmanager.
- Initialize the Script (see the Documentation of the Script)
- Run the Scriptmanager in regular intervals to automate the flow of data to your sheets-file.
- Connect your sheets-file to your BI-tool of choice.
- Done!

## Questions, Bugs, etc.
If you encounter any problems while setting-up the script feel free to contact me. If you find any bugs I would be happy if you let me know.

Good Luck with your keyword auctions!
