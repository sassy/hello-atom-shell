module.exports = function(grunt) {
    grunt.initConfig({
        "download-atom-shell":  {
            version: "0.21.2",
            outputDir: "atom-shell"
        }
    });
    grunt.loadNpmTasks('grunt-download-atom-shell');
};
