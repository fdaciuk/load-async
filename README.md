# Load Async

> Load React components asynchronously

## Installation

```console
yarn add load-async
```

or using NPM:

```console
npm i --save load-async
```

## Usage

```js
import loadAsync from 'load-async'

const ContentAsync = loadAsync(import('./content'))

const App = () => (
  // will load a div until the component is ready
  <ContentAsync />
)
```

You can use `children` if you want to:

```
import loadAsync from 'load-async'
import Header from './header'

const MainAsync = loadAsync(import('./main'))

const App = () => (
  <MainAsync>
    <Header />
  </MainAsync>
)
```

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk
