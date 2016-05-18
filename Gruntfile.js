module.exports = function(grunt) {
  grunt.initConfig({
    /* Concatination file contents */
    concat: {
      options: {
        separator: '\n',
        stripBanners: true
      },
      libs: {
        src:[
            'src/md/intro.md'
            ,'src/md/Prmitives.md'
            ,'src/md/TruthyVsFalsy.md'
            ,'src/md/functions.md'
            ,'src/md/scope.md'
            ,'src/md/Object.md'
            ,'src/md/LiteralsVsWrappers.md'
            ,'src/md/inheritance.md'
            ,'src/md/this.md'
            ,'src/md/EventLoop.md'
            ,'src/md/Links.md'
        ],
        dest : 'src/render/index.html.md'
      },
    }
  });
  /* Loading dependencies */
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('app', ['concat']);
};
