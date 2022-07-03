import { resolve } from 'path';

export const entry = resolve(__dirname, 'src', 'index.js');
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  loaders: [{ json: /\.json$/, loader: 'json-loader' }],
};
