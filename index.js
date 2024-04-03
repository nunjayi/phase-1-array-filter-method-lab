// Code your solution here
function findMatching(driverArr, name) {
    return driverArr.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(driverArr, letters) {
    const lowerCaseLetters = letters.toLowerCase();
    return driverArr.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetters));
}

function matchName(driverObj, string) {
    return driverObj.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}