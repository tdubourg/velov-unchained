"use strict"

var gps_utils = require("./gps_utils")

function test_tile_gps () {
	// 	var O_lat = 45.8
	// var O_long = 4.77
	// those ones should in the very first tile (index 0)
	var lat = 45.8 - 0.005
	var long = 4.77 + 0.005
	var tile_index = gps_utils.get_tile_from_gps_coords(lat, long)
	var expected = 0

	if (tile_index != expected) {
		console.error("Error, the returned tile should have been", expected, "but was ", tile_index)
	};
	// Those ones should be on the 4th one
	var lat = 45.8 - 0.005
	var long = 4.77 + 0.035
	var tile_index = gps_utils.get_tile_from_gps_coords(lat, long)
	var expected = 3

	if (tile_index != expected) {
		console.error("Error, the returned tile should have been", expected, "but was ", tile_index)
	};

	var lat = 45.8 - 0.055
	var long = 4.77 + 0.045
	var tile_index = gps_utils.get_tile_from_gps_coords(lat, long)
	var expected = 10*5 + 4

	if (tile_index != expected) {
		console.error("Error, the returned tile should have been", expected, "but was ", tile_index)
	};
	var lat = 45.8 - 0.095
	var long = 4.77 + 0.095
	var tile_index = gps_utils.get_tile_from_gps_coords(lat, long)
	var expected = 99

	if (tile_index != expected) {
		console.error("Error, the returned tile should have been", expected, "but was ", tile_index)
	};

	var lat = 45.8 - 0.105
	var long = 4.77 + 0.095
	var tile_index = gps_utils.get_tile_from_gps_coords(lat, long)
	var expected = -1 // -1 is when there is an error, we should have an error here as we are out of range

	if (tile_index != expected) {
		console.error("Error, the returned tile should have been", expected, "but was ", tile_index)
	};

}

test_tile_gps()