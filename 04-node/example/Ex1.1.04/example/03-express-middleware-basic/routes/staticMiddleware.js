///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


let staticMid;

staticMid = (req, res, next) => {

	if (req.path.startsWith("./api")) {

		// 说明此时想要获取 api接口
		next();

	} else {

		// 说明此时想要获取 静态资源
		if (true) {

			res.send('静态资源');

		} else {

			next();
		}
	}
};


//-------------------------------------------------------------------------------------------------------------------//


module.exports = {
	staticMid
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////