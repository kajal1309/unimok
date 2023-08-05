### Authored by 
Kajal 

# Log Digestion 
This repository contains TypeScript code snippets to analyze log files in a specific format. The code snippets process log entries to perform various analyses such as counting API end points, grouping API calls by status code, and getting the total count of API calls in each minute.

## Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippets](#code-snippets)


# Introduction
Log files often contain valuable information that can be extracted and analyzed for insights. The provided JavaScript code snippets demonstrate different log file analysis techniques using regular expressions and date manipulation.

# Installation
1. Clone this repository to your local machine:

```bash
git clone  https://github.com/kajal1309/unomok.git
```
2. Navigate to the cloned directory:

```bash
cd unomok
```

# Usage
Before running the code snippets, make sure you have Node.js installed on your machine.

1. Open a terminal and navigate to the project directory.

2. Run the desired code snippet using Node.js. For example, to analyze api-dev-out.log file, run the following:
```bash
node logAnalysis.ts "api-dev-out-log"
```
Similarly for the other two log files api-prod-out.log and prod-api-prod-out.log, we can pass the name of the log files as command line arguments 
```bash
node logAnalysis.ts "api-prod-out.log"
node logAnalysis.ts "prod-api-prod-out.log"
```

The script will output the results to the console.

Due to size constraints, maybe the entire log file is not being uploaded in github. To overcome this issue, you can download the log files from the drive link and paste them in the project folder and then pass the name of the log file as command line argument in the above shown format.

# Code Snippets

File: logAnalysis.ts

## Task 1  Counting API end-points

This code snippet reads a log file, extracts timestamps, and counts the number of API end points. It uses regular expressions to match timestamps and end-points from log entries.

## Task 2 Counting API Calls by Minute

This code snippet reads a log file, extracts timestamps, and calculates the total count of all API calls in each minute. It tracks the total count using an object with minute keys.

## Task 3 Counting API Calls for each HTTP status code

This code snippet reads a log file, extracts timestamps, and calculates the total count of all API calls for each HTTP status code. It tracks the total count of calls for each HTTP Status code.


