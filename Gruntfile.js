module.exports = function(grunt) {
    
    var sourceFiles = [
        // 'vendor/jquery.js',
        'vendor/jquery.initialize.js',
        '_getClasses.js',
        '_calcProgress.js',
        '_progress.js',
        '_input.js',
        'app.js',
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // folder definitions
        srcDir: 'src',
        webDir: 'dist',
        viewsDir: 'app/View',
        cssSrc: '<%= srcDir %>/scss',
        jsSrc: '<%= srcDir %>/js',
        cssDest: '<%= webDir %>/css',
        jsDest: '<%= webDir %>/js', 

        // clean the target folders
        clean: {
            folders: [
                '<%= jsDest %>/*',
                '!<%= jsDest %>/*.min.js',
                '<%= cssDest %>/*',
            ]
        },

        // compile sass
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    includePaths: require('node-bourbon').includePaths
                },
                files: {
                    '<%= cssDest %>/normalize.css': '<%= cssSrc %>/normalize.scss',
                    '<%= cssDest %>/style.css': '<%= cssSrc %>/index.scss'
                }        
            },
            dev: {
                options: {
                    outputStyle: 'expanded',
                    includePaths: require('node-bourbon').includePaths
                },
                files: {
                    '<%= cssDest %>/normalize.css': '<%= cssSrc %>/normalize.scss',
                    '<%= cssDest %>/style.css': '<%= cssSrc %>/index.scss'
                }
            }
        },

         // concat and minify js files (dist only)
        uglify: {
            dist: {
                options: {
                    mangle: {
                        toplevel: true
                    },
                    wrap: 'quanui',
                    compress: {
                        drop_console: true
                    },
                    report: 'min',
                    preserveComments: 'some',
                },
                files: {
                    '<%= jsDest %>/quanui.min.js': sourceFiles.map(function (x){
                        return '<%= jsSrc %>/' + x;
                    })
                }
            },

            dev: {
                options: {
                    mangle: {
                        toplevel: true
                    },
                    wrap: 'quanui',
                    report: 'min',
                    preserveComments: 'some',
                    sourceMap: true
                },
                files: {
                    '<%= jsDest %>/quanui.min.js': sourceFiles.map(function (x){
                        return '<%= jsSrc %>/' + x;
                    })
                }
            }
        },

        // watch task (dev only)
        watch: {
            grunt: { 
                files: 'Gruntfile.js',
                tasks: ['sass:dev', 'uglify:dev']
            },

            sass: {
                files: '<%= cssSrc %>/**/*.scss',
                tasks: 'sass:dev'
            },

            js: {
                files: '<%= jsSrc %>/**/*.js',
                tasks: 'uglify:dev'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['clean', 'sass:dist', 'uglify:dist']);
    grunt.registerTask('default', ['clean', 'sass:dev', 'uglify:dev', 'watch']);    
}