/*global module:false*/
module.exports = function(grunt) {

	var stylusFiles = ['src/styl/main.styl', 'src/styl/responsive.styl'];

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		connect:{
			server:{
				options:{
					port: 8800,
					base: 'src'
				}
			}
		},
		stylus:{
			compile:{
				files:{
					'build/css/main.css' : stylusFiles
				}
			}
		},
		watch:{
			build:{
				files: stylusFiles,
				tasks: 'stylus'
			}
		}
		/*
		shell:{
			prueb:{
				options:{
					stdout: true
				},
				command: 'echo Compilando...'
			}
		}
		*/
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	// Default task.
	grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('build', ['stylus']);

};
