module.exports = {
    default: {
        files: [
            {
                cwd: 'build/media-production-workshop-2021',
                dest: 'build/media-production-workshop-2021',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
