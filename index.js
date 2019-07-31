
// drivers is an array

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}


// line 6, need the return key work because .toLowerCase() is a function  
// filter is like an each statement. function is the block. 
// How the each statement works is you need to call it on an array, so here we are calling drivers.filter
//  Then we need to pass in the |param|, so we name a new variable, driver
// next we return the block, which is driver.action
// The function parenthesis closes after the block object {}  


// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.startsWith(letters)
    })
}

// first letter needs to match

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    })
}
