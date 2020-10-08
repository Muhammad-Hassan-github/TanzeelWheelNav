document.write(
  unescape("%3Cscript src='https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/raphael.min.js' type='text/javascript'%3E%3C/script%3E")
);
document.write(
  unescape("%3Cscript src='https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/wheelnav.min.js' type='text/javascript'%3E%3C/script%3E")
);

var wheel = new wheelnav("wheelDiv");

wheel.markerEnable = true;
wheel.slicePathFunction = slicePath().DonutSlice;
wheel.markerEnable = true;
wheel.colors = colorpalette.gamebookers;
wheel.createWheel(["Step 1", "Step 2", "Step 3", "Step 4",]);
wheel.navItems[0].navigateFunction = function () {
  document.getElementById("nav0").style.display = "none";
  
}


