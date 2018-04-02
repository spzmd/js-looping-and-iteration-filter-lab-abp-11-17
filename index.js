const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
  return drivers.filter((e)) => { return e.toLowerCase() === string.toLowerCase(); });
}
  

  
/*
function findMatching(collection, driver) {
  for (const driver of collection) {
    if (driver.name === 'Bobby' || 'bobby') {
      console.log(driver.name);
    }
  }
}

drivers('Bobby');
*/