module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/media-production-workshop-2021/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /media-production-workshop-2021/ --configuration production --subresource-integrity'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/media-production-workshop-2021/browser/**.map'
        },
        'verify': {
            cmd: `npx bundle-buddy build/media-production-workshop-2021/browser/*.js.map && \
                grep -r build/media-production-workshop-2021/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
