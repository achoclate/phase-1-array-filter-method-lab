// Code your solution here

function findMatching(start, driver) {
    return start.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === driver.toLowerCase()
    );
  }
  
  function fuzzyMatch(start, testString) {
    return start.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(start, driverName) {
    return start.filter((record) => record.name === driverName);
  }