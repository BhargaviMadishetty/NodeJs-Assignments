const fs = require('fs/promises')


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, fileContent, (err) => {
			if(err) {
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, function(err, fileContent){
			if(err){
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) => {
		fs.appendFile(fileName, fileContent, (err) => {
			if(err) {
				reject(err);
			}
			resolve(fileContent);
		});
		resolve(console.log(fileContent));
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve, reject) => {
		fs.unlink(fileName, (err) => {
			if(err) {
				reject(err);
			}
			resolve(console.log("deleted"));
		});
	});
}

myFileWriter('Bhargavi.txt', "Hello Bhargavi").then(myFileReader("Bhargavi.txt")).then(myFileUpdater('Bhargavi.txt', 'Hi there'))
//.then(myFileDeleter("Bhargavi.txt"));



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }


