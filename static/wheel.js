

var wheel = new wheelnav("wheelDiv");
console.log('added wheel');
wheel.markerEnable = true;
wheel.slicePathFunction = slicePath().DonutSlice;
wheel.colors = colorpalette.gamebookers;
wheel.createWheel(["Step 1", "Step 2", "Step 3", "Step 4", "Step 5",]);

wheel.navItems[0].navigateFunction = function () {
  var p = document.getElementById('nav0')
  p.innerHTML = "1"


}

wheel.navItems[1].navigateFunction = function () {
  var p = document.getElementById('nav0')
  p.innerHTML = "2"

}
wheel.navItems[2].navigateFunction = function () {
  var p = document.getElementById('nav0')
  p.innerHTML = "3"


}

wheel.navItems[3].navigateFunction = function () {
  var p = document.getElementById('nav0')
  p.innerHTML = "4"


}
wheel.navItems[4].navigateFunction = function () {
  var p = document.getElementById('nav0')
  p.innerHTML = "5"


}


