const { watch } = require('less');

module.exports = function(grunt){
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less:{
            development: {
                files: {
                    "css/estilos.css": "css/estilos.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
}