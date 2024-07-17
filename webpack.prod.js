const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

// for not jsx users
module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: './src/index.tsx',
    smartblock: './src/adapter/index.tsx',
    'pm/commands': './src/pm/commands/index.ts',
    'pm/gapcursor': './src/pm/gapcursor/index.ts',
    'pm/history': './src/pm/history/index.ts',
    'pm/inputrules': './src/pm/inputrules/index.ts',
    'pm/keymap': './src/pm/keymap/index.ts',
    'pm/model': './src/pm/model/index.ts',
    'pm/schema-list': './src/pm/schema-list/index.ts',
    'pm/state': './src/pm/state/index.ts',
    'pm/tables': './src/pm/tables/index.ts',
    'pm/transform': './src/pm/transform/index.ts',
    'pm/utils': './src/pm/utils/index.ts',
    'pm/view': './src/pm/view/index.ts',
    'extensions/index': './src/extensions/index.tsx',
    'extensions/code': './src/extensions/code/index.tsx',
    'extensions/embed': './src/extensions/embed/index.tsx',
    'extensions/image': './src/extensions/image/index.tsx',
    'extensions/link': './src/extensions/link/index.tsx',
    'extensions/table': './src/extensions/table/index.tsx',
    'extensions/blockquote': './src/extensions/blockquote.tsx',
    'extensions/bullet-list': './src/extensions/bullet-list.tsx',
    'extensions/custom-block': './src/extensions/custom-block.tsx',
    'extensions/custom-mark': './src/extensions/custom-mark.tsx',
    'extensions/default-keys': './src/extensions/default-keys.tsx',
    'extensions/default-plugins': './src/extensions/default-plugins.tsx',
    'extensions/emphasis': './src/extensions/emphasis.tsx',
    'extensions/heading1': './src/extensions/heading1.tsx',
    'extensions/heading2': './src/extensions/heading2.tsx',
    'extensions/heading3': './src/extensions/heading3.tsx',
    'extensions/heading4': './src/extensions/heading4.tsx',
    'extensions/heading5': './src/extensions/heading5.tsx',
    'extensions/heading6': './src/extensions/heading6.tsx',
    'extensions/list-item': './src/extensions/list-item.tsx',
    'extensions/move-down': './src/extensions/move-down.tsx',
    'extensions/move-up': './src/extensions/move-up.tsx',
    'extensions/ordered-list': './src/extensions/ordered-list.tsx',
    'extensions/paragraph': './src/extensions/paragraph.tsx',
    'extensions/strike': './src/extensions/strike.tsx',
    'extensions/strong': './src/extensions/strong.tsx',
    'extensions/trash': './src/extensions/trash.tsx',
    'extensions/underline': './src/extensions/underline.tsx',
  },
  output: {
    library: {
      name: ['SmartBlock', '[name]'],
      type: 'umd',
      export: 'default',
    },
    path: path.resolve(__dirname, 'dist/umd'),
    filename: (data) => `${data.chunk.name.toLowerCase()}.js`,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
});
