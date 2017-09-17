# think-view-xtemplate

[![Greenkeeper badge](https://badges.greenkeeper.io/lizheming/think-view-xtemplate.svg)](https://greenkeeper.io/)
Use nunjucks to render view files for ThinkJS 3.x

## Install

```
npm install think-view-xtemplate
```

## How To Use

```js
const xtpl = require('think-view-xtpl');
exports.view = {
  type: 'xtpl',
  xtpl: {
    handle: xtpl,
    beforeRender: (xtpl, opts) => {}
    options: {
      encoding: 'utf-8'
    }
  }
}
```
