module.exports = function(grunt) {

  var clientes = grunt.file.readJSON("src/data/clientes.json");
  
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          data: {
            debug: true,
            pretty: false,
            clientes: clientes
          }
        },
        files: [{
          cwd: "src/jade",
          src: "*.jade",
          dest: "build/",
          expand: true,
          ext: ".html"
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss', '*.sass'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },
    coffee: {
      default: {
        expand: true,
        flatten: true,
        cwd: 'src/coffee',
        src: ['*.coffee'],
        dest: 'build/js/',
        ext: '.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'sass', 'coffee']);

};