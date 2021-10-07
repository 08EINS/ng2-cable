/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/ng2-cable.umd.js',
    name: 'ng2-cable',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      'rxjs': 'Rx',
      'rxjs/operators': 'Rx.operators',
      'actioncable': 'ActionCable',
      'tslib': 'tslib',
    },
    sourcemap: false,
  },
  external: [
    '@angular/core',
    'rxjs/operators',
    'rxjs',
    'actioncable',
    'tslib',
  ]
};
