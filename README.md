# iota-css-theme

Matthew Scheuerman's notes: I will be adding a json based token generator, adding components, suggesting naming changes,and potentially suggesting theming and night/dark mode. 

The rest of the README is as before, with the exception of adding a few NPM commands 

## Usage

In your main React file, you could do :

```shell
import "iota-css-theme";
```

### Fonts

You have to manually copy the icon font in to your project to use it.

The css for this package will automatically load the font from `/assets/iota-icons.ttf` at runtime, there is no need to link to the font file manually in your source.

If for example, you are using [create-react-app](https://github.com/facebook/create-react-app), you should copy `/assets/iota-icons.ttf` into the `/public/assets` folder of you react app. When the app builds it will copy the file into the `/assets` folder.

## Documentation

View the Styleguide at <https://iota-css-theme.dag.sh>

## Development

To build the package run:

```shell
npm install
npm install gulp
npm install gulp-shell
npm run build
```

To run Amazon Style Dictionary, run

```shell
gulp
```

or to build and then serve the style guide locally:


```shell
npm run build-serve
```

or to watch the sass files and automatically rebuild once they have been served you can use:

```shell
npm run build-serve-watch
```
