module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        express: {
            default_option: {}
        },
        shell: {
            listFolders: {
                options: {
                    stdin: true,
                    stdout: true,
                    stderr: true,
                    failOnError: true
                },
                command: 'jasmine-node test/'
            }
        }
    });
    grunt.registerTask('test', ["shell"]);
    grunt.registerTask('default', ['express', 'test']);
};