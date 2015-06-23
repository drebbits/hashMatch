module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  hashMatch js v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  @author <%= pkg.author.name %>\n" +
				" *  @authorurl <%= pkg.author.url %>\n" +
				" *  @twitter <%= pkg.author.twitter %>\n" +
				" *  @license <%= pkg.license %>\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/hashmatch.jquery.js"],
				dest: "hashmatch.jquery.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/hashmatch.jquery.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["hashmatch.jquery.js"],
				dest: "hashmatch.jquery.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// grunt watch
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["jshint", "build"]);

};