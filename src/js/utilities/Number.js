module.exports.randomNumber = function(low, high) {
	var spread = high-low;
	var result = Math.floor((Math.random() * (spread+1)) + low);
	return result;
}
