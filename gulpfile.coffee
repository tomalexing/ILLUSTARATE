gulp = require 'gulp'
connect = require 'gulp-connect'
watch = require 'gulp-watch'



gulp.task 'ind', ->
  do connect.reload

gulp.task 'connect', ->
	connect.server 
		# port: 1337
		root: './'
		livereload: on	


gulp.task 'watch', ->
	gulp.watch './sass/**/*.*', ['ind']
	gulp.watch 'index.html', ['ind']

gulp.task 'default', ['connect', 'watch']
