// Include fs module
const fs = require('fs');

const path = process.argv.slice(2);
const logFilePath = path[0];
const logFileContent = fs.readFileSync(logFilePath, 'utf-8');


// Regular expression pattern to match timestamps and log messages
const logEntryPattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+\d{2}:\d{2}): (.+)/g;

// Extract timestamps and log messages
const logEntries = [{}];
let match;
while ((match = logEntryPattern.exec(logFileContent)) !== null) {
  const timestamp = new Date(match[1]);
  const logMessage = match[2].trim();
  
  logEntries.push({ timestamp, message: logMessage });
}
console.log("Log entries look like this");
console.log(logEntries[0]);



// Regular expression pattern to match log entries
const endPointPattern = /\[.*?\] "([A-Z]+) ([^"]+)"/g;

// Extract endpoints and count occurrences
const endpointCounts = {};
let endPointmatch;
while ((endPointmatch = endPointPattern.exec(logFileContent)) !== null) {
  const method = endPointmatch[1];
  const endpoint = endPointmatch[2];

  const endpointKey = `${method} ${endpoint}`;
  if (!endpointCounts[endpointKey]) {
    endpointCounts[endpointKey] = 0;
  }
  endpointCounts[endpointKey]++;
}


console.log("Task 1 \nEnd points and how many times each one of them are called")
console.log(endpointCounts);


//Regular expression pattern to match log entries
const logEntryApiMinutePattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+\d{2}:\d{2}).*"([A-Z]+) ([^"]+)"/g;

//Create a data structure to track API call counts per minute
const apiCallCountsPerMinute = {};

// Extract timestamps and update counts
let apiMinuteMatch;
while ((apiMinuteMatch = logEntryApiMinutePattern.exec(logFileContent)) !== null) {
  const timestamp = new Date(apiMinuteMatch[1]);
  const minuteKey = timestamp.toISOString().substring(0, 16); // Extract yyyy-mm-dd hh:mm

  if (!apiCallCountsPerMinute[minuteKey]) {
    apiCallCountsPerMinute[minuteKey] = 0;
  }

  apiCallCountsPerMinute[minuteKey]++;
}
console.log("Task 2 \nNumber of API calls per minute")
console.log(apiCallCountsPerMinute);




// Regular expression pattern to match status codes
const logEntryStatusPattern = /HTTP\/\d\.\d" (\d+)/g;

// Create a data structure to track API call counts per status code
const apiCallCountsPerStatusCode = {};

// Extract status codes and update counts
let statusMatch;
while ((statusMatch = logEntryStatusPattern.exec(logFileContent)) !== null) {
  const statusCode = statusMatch[1];

  if (!apiCallCountsPerStatusCode[statusCode]) {
    apiCallCountsPerStatusCode[statusCode] = 0;
  }
  apiCallCountsPerStatusCode[statusCode]++;
}

const ApiStatus = {200:'OK',206:'Partial Content Success', 304:'Not modified',400:'Bad request',401:'Unauthorized',404:'Not found',416:'Range not satisfied',422:'Unproccessable content',500:'Internal Server error'} 

// Display the results in the desired format
console.log("Task 3 \nNumber of API calls for each status code")
for (const statusCode in apiCallCountsPerStatusCode) {
  console.log(`${ApiStatus[statusCode]} \t\t ${statusCode} \t ${apiCallCountsPerStatusCode[statusCode]}`);
}


