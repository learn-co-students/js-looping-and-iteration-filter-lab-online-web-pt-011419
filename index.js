// Code your solution in this file
function findMatching(collection, name) {
    return collection.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(collection, letters) { 
    return collection.filter(name => name.slice(0,letters.length) === letters)
}

function matchName(data, name) {
    return data.filter(data => data.name === name)
}