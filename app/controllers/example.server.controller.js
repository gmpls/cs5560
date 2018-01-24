// Create a new 'render' controller method
exports.render = function (req, res) {

	// Use the 'response' object to render the 'index' view with a 'title' property
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head><title>Example Page</title></head>");
	res.write("<body>");
	res.write("<h1 style=\"color:red\"> Hello Express! </h1>");
	res.write("</body>");
	res.write("</html>");
	res.end();
};

