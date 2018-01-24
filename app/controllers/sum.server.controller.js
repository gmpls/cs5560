// Create a new 'render' controller method
exports.render = function (req, res) {

	req.session.input1 = req.query.input1;
	req.session.input2 = req.query.input2;
	

	// Use the 'response' object to render the 'index' view with a 'title' property
	res.write("{\"sum\":" + "\"" + add(req, res) + "\"}");
	res.end();

};

function add(req, res) {
	var sum = parseInt(req.session.input1) + parseInt(req.session.input2);
	if (isNaN(sum)) {
		return " ";
	}
	else {
		return sum;
	}

}
