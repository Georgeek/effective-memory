var gulp = require('gulp');
	pug = require('gulp-pug');
	stylus = require('gulp-stylus');
	connect = require('gulp-connect');
	concat = require('gulp-concat');
	plumber = require('gulp-plumber');

gulp.task('connect', function() {
	connect.server({
		name: '############################################# \n EGOR\'s SERVER IS RUNNING ===>',
		port: 8000,
		livereload: true,
		root: './dist'
	});
	console.log('############################################# \n############################################# \n [[HELLO WORLD!! SERVER IS UP!! localhost:8000]] \n#############################################\n#############################################');
});

gulp.task('pug', function() {
	gulp.src('./src/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('stylus', function() {
	gulp.src('./src/pages/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('dist/style'))
		.pipe(connect.reload());
});

gulp.task('concat', function() { // TODO опеределить варианты импорта различных библиотек
	gulp.src('./src/pages/*.js') // TODO переделать task под новый вариант
		.pipe(plumber())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.pug', ['pug']),
	gulp.watch('./src/**/*.js', ['concat']),
	gulp.watch('./src/**/*.styl', ['stylus'])
});

gulp.task('default', ['pug', 'stylus' , 'concat', 'connect', 'watch']);
