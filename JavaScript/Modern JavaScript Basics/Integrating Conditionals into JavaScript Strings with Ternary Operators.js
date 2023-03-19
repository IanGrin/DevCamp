const page = 'About';
console.log(`class=${ page === "Home" ? 'master-layout' : 'secondary-layout' }`)

var ship = "hit";

function battleShip(ship) {
  return(`class=${ page === 'hit' ? '1-point' : 'you lost a point' }`)
}