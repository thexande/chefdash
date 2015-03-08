module.exports = function(grunt) {
 grunt.initConfig({
 	jshint: {
 		files: ['Gruntfile.js', 'app/router.js'],
 			globals: {
 				jQuery: true
 			}
 	},
 	watch:{
 		files: ['<%= jshint.files %>'],
 		tasks: ['jshint']
 		}
	})  ;

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint']); 
};
