///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs'),
	path = require('path');


//-------------------------------------------------------------------------------------------------------------------//


/**
 * .resolve(dirname): childPathsArr;
 *
 *
 * 根据指定目录，返回该目录子目录信息
 */

const dirname = path.resolve(__dirname, './demo');

async function test() {

	const childPaths = await fs.promises.readdir(dirname);

	console.log(childPaths);
}

test();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
