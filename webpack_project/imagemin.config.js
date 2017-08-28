const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['./src/image/*.{jpg,png,ico}'], './dist-dev/image', {
	plugins: [
		imageminMozjpeg({quality: 50}),
		imageminPngquant({quality: '65-80'})
	]
}).then(files => {
	console.log('success');
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
