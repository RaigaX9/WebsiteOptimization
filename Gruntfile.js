module.exports = function(grunt) {

    //Configuration.
    grunt.initConfig({
        cssmin: {
            views: {
                files: {
                    'views/css/site.tidy.min.css': ['dist/views/css/style.css', 'dist/views/css/bootstrap-grid.css'],
                    'css/style.min.css': ['dist/css/style.css']
                }
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeCommentsFromCDATA: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: {
                     //'Destination': 'Source'
                    'index.html': 'index.html',
                    'project-2048.html': 'project-2048.html',
                    'project-mobile.html': 'project-mobile.html',
                    'project-webperf.html': 'project-webperf.html',
                    'views/pizza.html': 'views/pizza.html'
                }
            }
        },
        useminPrepare: {
            html: [
                'dist/index.html',
                'dist/project-2048.html',
                'dist/project-mobile.html',
                'dist/project-webperf.html'
            ],
            options: {
                dest: '.'
            }
        },
        usemin: {
            html: [
                'index.html',
                'project-2048.html',
                'project-mobile.html',
                'project-webperf.html'
            ]
        },
        copy: {
            task0: {
                files: [
                    {expand:true, cwd: 'dist/img/', src:['**'], dest: 'img/'},
                    {expand:true, cwd: 'dist/views/images/', src:['**'], dest: 'views/images/'},
                    {src:'dist/index.html', dest:'index.html'},
                    {src:'dist/project-2048.html', dest:'project-2048.html'},
                    {src:'dist/project-mobile.html', dest:'project-mobile.html'},
                    {src:'dist/project-webperf.html', dest:'project-webperf.html'}

                ]
            }
        },
        uglify: {
            js:{
                files: {
                    'js/perfmatters.min.js': ['dist/js/perfmatters.js']
                }
            },
            views: {
                files: {
                    'views/js/main.min.js': ['dist/views/js/main.js']

                }
            }
        },
        processhtml: {
            views: {
                files: {
                    'views/pizza.html': ['dist/views/pizza.html']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //Build tasks
    grunt.registerTask('build', [
        'copy:task0',
        'useminPrepare',
        'cssmin',
        'uglify',
        'usemin',
        'processhtml',
        'htmlmin'
    ]);

};
