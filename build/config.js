// meh, just export the whole dang thing as an object...

export default {
  config: {
    src: [
      'src/**/*.js',
      '!src/**/*.spec.js',
      '!src/**/{fixtures,templates}/**'
    ],
    htmlSrc: [
      'src/**/*.html',
      'src/**/*.json',
      '!src/**/*/.scss'
    ],
    vendorFiles: {
      common: [
        //'node_modules/path/path.js'
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        //'node_modules/bootstrap/dist/js/boostrap.min.js'
        'node_modules/angular-esri-map/dist/angular-esri-core.min.js',
        'node_modules/angular-esri-map/dist/angular-esri-map.min.js'
      ]
    },
    backEndsrc: [
      'src/**/*.js'
    ],
    backEndTemplates: [
      'src/**/*',
      '!src/**/*.js'
    ],
    watch: [
      'src/**/*.js',
      'src/**/*.scss',
      'src/**/*.html'
    ],
    sass: [
      'src/**/*.scss'
    ],
    templates: [
      //'src/**/{fixtures,templates}/**',
      //'src/**/templates/**/.*'
    ],
    inject: {
      cwd: 'dist/',
      targetFiles: [
        './**/*.html',
      ]
    },
    destDir: "dist",
    targetDir: "target",
    test: [
      'src/**/*.spec.js'
    ]
  }
};
