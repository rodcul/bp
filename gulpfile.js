var gulp = require('gulp')
	, stylus = require('gulp-stylus')
	, koutoSwiss = require('kouto-swiss')
	, prefixer = require('autoprefixer-stylus')
	, jeet = require('jeet')
	, rupture = require('rupture')
	, imagemin = require('gulp-imagemin')
	, concat = require('gulp-concat')
	, uglify = require('gulp-uglify')
	, gutil = require('gulp-util')
	, csso = require('gulp-csso')
	, buffer = require('vinyl-buffer')
	, ftp = require('vinyl-ftp');

var src = './src'
	, dist = './assets';

var scripts = {
	process: [
		'./node_modules/jquery/dist/jquery.min.js'
		, './node_modules/jquery-cycle2/build/jquery.cycle2.min.js'
		, './node_modules/waypoints/lib/jquery.waypoints.min.js'
		, src + '/js/slick.js'
		, src + '/js/main.js'
		, src + '/js/menu.js'
		, src + '/js/home.js'
		, src + '/js/scroll-animation.js'
		, src + '/js/careers.js'
		, src + '/js/product.js'
		, src + '/js/integrations.js'
		, src + '/js/resources.js'
		, src + '/js/signup.js'
		, src + '/js/pricing.js'
		, src + '/js/hero-banner.js'
	]
};

// compile all .styl file and generate main.css

gulp.task('css', function() {
	return gulp.src(src + '/css/main.styl')
		.pipe(stylus({
			use:
				[koutoSwiss(), prefixer(), jeet(), rupture()]
				, 'include css': true
			})
		)
		.pipe(csso())
		.on('error', nocrash)
		.pipe(gulp.dest(dist + '/css'));
});

// concat all .js files into main.js

gulp.task('js', function() {
	return gulp.src(scripts.process)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.on('error', nocrash)
		.pipe(gulp.dest(dist + '/js'));
});

// copy useful .js files

gulp.task('copy-js', function() {
	return gulp.src(scripts.copy)
		.pipe(uglify())
		.pipe(gulp.dest(dist + '/js'));
});

// minify theme images

gulp.task('imagemin', function() {
	return gulp.src(src + '/img/*.{jpg,png,gif,svg}')
		.pipe(imagemin({
			optimizationLevel: 3
			, progressive: true
			, interlaced: true
		}))
		.pipe(gulp.dest(dist + '/img'));
});



function nocrash(error) {
	console.log(error.toString());
	this.emit('end');
}

// default task

gulp.task('default', ['css', 'js', 'imagemin'], function() {
	gulp.watch(src + '/css/**/*.styl', ['css']);
	gulp.watch(src + '/js/**/*.js', ['js']);
	gulp.watch(src + '/img/**/*.{jpg,png,gif}', ['imagemin']);
	gulp.watch(src + '/img/sprites/*.{jpg,png,gif,svg}', ['sprites']);

	console.log('I\'m watching you!');
});

// deploy task

gulp.task('deploy', function () {
    var conn = ftp.create({
		host: 'host.com'
		, user: 'username'
		, password: '123456'
		, parallel: 10
		, log: gutil.log
    });

	var globs = [
		'assets/**'
		, 'functions/**'
		, '*.php'
		, 'screenshot.png'
		, 'style.css'
    ];

	var path = '/path/to/your/theme';

    return gulp.src(globs, { base: '.', buffer: false })
		.pipe(conn.newer(path)) // only upload newer files
		.pipe(conn.dest(path));
});
