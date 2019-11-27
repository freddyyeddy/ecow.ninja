const sass = require('node-sass');
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        implementation: sass,
        includePaths: require('node-bourbon').includePaths,
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapEmbed: false
      },
      dist: {
        files: {
          'ecow_ninja/inc/test.css' : 'ecow_ninja/inc/test.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'ecow_ninja/inc/test.scss',
        tasks: ['sass', 'autoprefixer']
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 4 version'],
        map: true,
      },
      single_file: {
             src: 'ecow_ninja/inc/test.css',
             dest: 'ecow_ninja/inc/test.css'
      },
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
