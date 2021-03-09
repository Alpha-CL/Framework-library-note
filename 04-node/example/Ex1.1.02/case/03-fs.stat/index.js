///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs'),
	path = require('path');




//-------------------------------------------------------------------------------------------------------------------//


/**
 * .stat(target): info;
 *
 *
 * @target: 可以 文件/目录
 *
 * return: 返回文件或目录的信息对象
 */

const filename = path.resolve(__dirname, './avatar.jpg');

async function test() {

	const stat = await fs.promises.stat(filename);

	console.log(stat);
	// Stats {
	// 	dev: 16777220,
	// 		mode: 33188,
	// 		nlink: 1,
	// 		uid: 501,
	// 		gid: 20,
	// 		rdev: 0,
	// 		blksize: 4096,
	// 		ino: 12925718046,
	// 		size: 201125,
	// 		blocks: 400,
	// 		atimeMs: 1613824469436.3066,
	// 		mtimeMs: 1613816856347.9202,
	// 		ctimeMs: 1613824461685.0164,
	// 		birthtimeMs: 1613816856200.8645,
	// 		atime: 2021-02-20T12:34:29.436Z,
	// 		mtime: 2021-02-20T10:27:36.348Z,
	// 		ctime: 2021-02-20T12:34:21.685Z,
	// 		birthtime: 2021-02-20T10:27:36.201Z }
}

test();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////