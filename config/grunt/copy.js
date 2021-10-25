module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/media-production-workshop-2021/',
                expand: true,
                src: ['404.html']
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/media-production-workshop-2021/',
                dest: 'build/media-production-workshop-2021/scripts/',
                expand: true,
                src: ['**/!(ngsw-worker).js']
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/media-production-workshop-2021/',
                dest: 'build/media-production-workshop-2021/styles/',
                expand: true,
                src: ['**/*.css']
            }
        ]
    }
};
