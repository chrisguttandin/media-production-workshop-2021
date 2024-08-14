module.exports = {
    default: {
        files: [
            {
                cwd: 'build/media-production-workshop-2021/browser',
                dest: 'build/media-production-workshop-2021/browser',
                expand: true,
                src: ['**/404.html']
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
