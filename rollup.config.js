export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-cable.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2-cable',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs': 'Rx',
    'rxjs/operators': 'Rx.operators',
    'actioncable': 'ActionCable'
  },
  external: [
    '@angular/core',
    'rxjs/operators',
    'rxjs',
    'actioncable'
  ]
}
