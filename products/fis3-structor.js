{
  cache: [Function],
  cli: {
    colors: {
      addSequencer: [Function],
      black: [Function],
      blackBG: [Function],
      blue: [Function],
      blueBG: [Function],
      bold: [Function],
      cyan: [Function],
      cyanBG: [Function],
      green: [Function],
      greenBG: [Function],
      grey: [Function],
      greyBG: [Function],
      inverse: [Function],
      italic: [Function],
      magenta: [Function],
      magentaBG: [Function],
      mode: 'console',
      rainbow: [Function],
      red: [Function],
      redBG: [Function],
      setTheme: [Function],
      strikethrough: [Function],
      stripColors: [Function],
      themes: {},
      underline: [Function],
      white: [Function],
      whiteBG: [Function],
      yellow: [Function],
      yellowBG: [Function],
      zalgo: [Function],
      zebra: [Function]
    },
    commander: null,
    help: [Function],
    info: {
      _from: 'fis3@3.3.29',
      _resolved: 'http://registry.npm.taobao.org/fis3/download/fis3-3.3.29.tgz',
      author: 'fis',
      bin: {
        fis3: 'bin/fis.js'
      },
      bugs: {
        url: 'https://github.com/fex-team/fis3/issues'
      },
      dependencies: {
        colors: '0.6.2',
        commander: '1.3.2',
        'fis-command-install': '0.2.15',
        'fis-lolcat': '1.0.1',
        'fis-optimizer-clean-css': '0.0.9',
        'fis-optimizer-png-compressor': '0.1.5',
        'fis-optimizer-uglify-js': '0.1.10',
        'fis-spriter-csssprites': '0.3.10',
        'fis3-command-init': '1.0.13',
        'fis3-command-inspect': '1.0.3',
        'fis3-command-release': '1.2.9',
        'fis3-command-server': '0.0.8',
        'fis3-deploy-encoding': '1.0.0',
        'fis3-deploy-http-push': '1.0.1',
        'fis3-deploy-local-deliver': '1.0.0',
        'fis3-errors': '*',
        'fis3-hook-components': '1.0.3',
        'fis3-packager-map': '1.0.9',
        'fis3-server-node': '0.0.7',
        glob: '5.0.3',
        'iconv-lite': '0.2.10',
        liftoff: '2.0.2',
        lodash: '3.6.0',
        minimatch: '2.0.4',
        minimist: '1.1.1',
        resolve: '1.1.6',
        tar: '0.1.17'
      },
      description: 'fis 3.0',
      devDependencies: {
        chai: '^2.2.0',
        coveralls: '2.10.0',
        'fis3-deploy-local-deliver': '1.0.0',
        'fis3-hook-cmd': '0.0.1',
        'fis3-postpackager-loader': '1.2.7',
        istanbul: '~0.2.14',
        jsdoc: '^3.3.2',
        minami: 'git://github.com/2betop/minami.git',
        mocha: '^2.2.1',
        'mocha-junit-reporter': '^1.4.0',
        'npm-watch': '0.0.0'
      },
      homepage: 'https://github.com/fex-team/fis3',
      keywords: ['fis'],
      license: 'BSD',
      main: 'index.js',
      name: 'fis3',
      repository: {
        type: 'git',
        url: 'https://github.com/fex-team/fis3.git'
      },
      scripts: {
        jsdoc: 'jsdoc --readme ./doc/docs/api/dev-plugin.md ./lib -r -t ./node_modules/minami -c .jsdoc.json -d ./doc/api',
        test: 'mocha test',
        'test-cov': 'istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test',
        'test-travis': 'istanbul cover node_modules/mocha/bin/_mocha test/*.js',
        watch: 'npm-watch'
      },
      version: '3.3.29',
      watch: {
        jsdoc: 'lib/*.js'
      }
    },
    name: 'fis3',
    run: [Function],
    version: [Function]
  },
  compile: [Function],
  config: {
    Config: [Function],
    DEFALUT_SETTINGS: {
      component: {
        author: 'fis-components',
        protocol: 'github',
        skipRoadmapCheck: true
      },
      modules: {
        commands: ['init', 'install', 'release', 'server', 'inspect'],
        hook: 'components',
        packager: 'map'
      },
      options: {},
      project: {
        charset: 'utf8',
        files: ['**'],
        ignore: ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js'],
        md5Connector: '_',
        md5Length: 7
      },
      system: {
        repos: 'http://fis.baidu.com/repos'
      }
    },
    _forks: [],
    _groups: {},
    _matches: [],
    _media: 'GLOBAL',
    _sortedMatches: null,
    data: {
      component: {
        author: 'fis-components',
        protocol: 'github',
        skipRoadmapCheck: true
      },
      modules: {
        commands: ['init', 'install', 'release', 'server', 'inspect'],
        hook: 'components',
        packager: 'map'
      },
      options: {},
      project: {
        charset: 'utf8',
        files: ['**'],
        ignore: ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js'],
        md5Connector: '_',
        md5Length: 7
      },
      system: {
        repos: 'http://fis.baidu.com/repos'
      }
    }
  },
  emit: [Function],
  emitter: {
    _events: {
      'release:end': [Function]
    },
    _eventsCount: 1,
    _maxListeners: undefined,
    domain: null
  },
  env: [Function],
  file: [Function],
  get: [Function],
  hook: [Function],
  info: {
    _from: 'fis3@3.3.29',
    _resolved: 'http://registry.npm.taobao.org/fis3/download/fis3-3.3.29.tgz',
    author: 'fis',
    bin: {
      fis3: 'bin/fis.js'
    },
    bugs: {
      url: 'https://github.com/fex-team/fis3/issues'
    },
    dependencies: {
      colors: '0.6.2',
      commander: '1.3.2',
      'fis-command-install': '0.2.15',
      'fis-lolcat': '1.0.1',
      'fis-optimizer-clean-css': '0.0.9',
      'fis-optimizer-png-compressor': '0.1.5',
      'fis-optimizer-uglify-js': '0.1.10',
      'fis-spriter-csssprites': '0.3.10',
      'fis3-command-init': '1.0.13',
      'fis3-command-inspect': '1.0.3',
      'fis3-command-release': '1.2.9',
      'fis3-command-server': '0.0.8',
      'fis3-deploy-encoding': '1.0.0',
      'fis3-deploy-http-push': '1.0.1',
      'fis3-deploy-local-deliver': '1.0.0',
      'fis3-errors': '*',
      'fis3-hook-components': '1.0.3',
      'fis3-packager-map': '1.0.9',
      'fis3-server-node': '0.0.7',
      glob: '5.0.3',
      'iconv-lite': '0.2.10',
      liftoff: '2.0.2',
      lodash: '3.6.0',
      minimatch: '2.0.4',
      minimist: '1.1.1',
      resolve: '1.1.6',
      tar: '0.1.17'
    },
    description: 'fis 3.0',
    devDependencies: {
      chai: '^2.2.0',
      coveralls: '2.10.0',
      'fis3-deploy-local-deliver': '1.0.0',
      'fis3-hook-cmd': '0.0.1',
      'fis3-postpackager-loader': '1.2.7',
      istanbul: '~0.2.14',
      jsdoc: '^3.3.2',
      minami: 'git://github.com/2betop/minami.git',
      mocha: '^2.2.1',
      'mocha-junit-reporter': '^1.4.0',
      'npm-watch': '0.0.0'
    },
    homepage: 'https://github.com/fex-team/fis3',
    keywords: ['fis'],
    license: 'BSD',
    main: 'index.js',
    name: 'fis3',
    repository: {
      type: 'git',
      url: 'https://github.com/fex-team/fis3.git'
    },
    scripts: {
      jsdoc: 'jsdoc --readme ./doc/docs/api/dev-plugin.md ./lib -r -t ./node_modules/minami -c .jsdoc.json -d ./doc/api',
      test: 'mocha test',
      'test-cov': 'istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test',
      'test-travis': 'istanbul cover node_modules/mocha/bin/_mocha test/*.js',
      watch: 'npm-watch'
    },
    version: '3.3.29',
    watch: {
      jsdoc: 'lib/*.js'
    }
  },
  log: {
    L_ALL: 4369,
    L_DEBUG: 16,
    L_ERROR: 4096,
    L_NORMAL: 4353,
    L_NOTIC: 1,
    L_WARNI: 256,
    alert: false,
    debug: [Function],
    error: [Function],
    format: [Function],
    info: [Function],
    level: 4353,
    notice: [Function],
    now: [Function],
    on: {
      any: [Function],
      debug: [Function],
      error: [Function],
      notice: [Function],
      warning: [Function]
    },
    throw :false,
    warn: [Function],
    warning: [Function]
  },
  match: [Function],
  media: [Function],
  on: [Function],
  once: [Function],
  plugin: [Function],
  project: {
    DEFAULT_REMOTE_REPOS: 'http://fis.baidu.com/repos',
    currentMedia: [Function],
    getCachePath: [Function],
    getProjectPath: [Function],
    getSource: [Function],
    getSourceByPatterns: [Function],
    getTempPath: [Function],
    lookup: [Function],
    setProjectRoot: [Function],
    setTempRoot: [Function]
  },
  release: [Function],
  removeAllListeners: [Function],
  removeListener: [Function],
  require: [Function],
  set: [Function],
  time: [Function],
  unhook: [Function],
  uri: [Function],
  util: [Function],
  version: '3.3.29'
}