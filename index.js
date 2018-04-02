function findMatching(drivers, string) {
  return drivers.filter((e)) => { return e.toLowerCase() === string.toLowerCase(); });
}