module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      wasmuth: {
        files: {
          '_wasmuth.min.scss': ['_wasmuth.scss']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
}
