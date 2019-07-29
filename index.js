function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {return driver.slice(0, string.length) === string })

}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {return driver.name === string} )

}
