// Create a new 'render' controller method
exports.render = function (req, res) {

	req.session.input1 = req.body.input1;
	req.session.input2 = req.body.input2;
	

	// Use the 'response' object to render the 'index' view with a 'title' property
	res.render('add', {
		input1: req.session.input1,
		input2: req.session.input2,
		result: add(req, res)
	});
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
