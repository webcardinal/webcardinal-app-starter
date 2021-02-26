## Description

Application template that combines multiple components of WebCardinal.

## How to make it run on your side

### Clone it

```
git clone https://github.com/webcardinal/webcardinal-app-starter my-application
```

### Install dependencies

```
cd my-application
npm install
```

Now you should see two folders: __`webcardinal`__ and __`.webcardinal`__.

First one is your distribution of WebCardinal.

Second one is where your development workflow will take place. All components, themes and other local dependencies are placed there.

### Run local server

```
npm start
```

### See it in your browser

Just open [http://127.0.0.1:8000](http://127.0.0.1:8000) with you favorite browser.

### How to update your distribution

```
npm run bundle-webcardinal
```

### How to build

For development, you must know some commands from [octopus](https://github.com/PrivateSky/octopus) (our custom task runner).

The following actions are used:

- <del>`cloneWebCardinalComponents` - deals with downloading web components and installing dependencies</del>;
- `buildWebCardinalComponents` - it generates the distribution used in the application;
- <del>`buildWebCardinalThemes` - for `@cardinal/<module>` which are using PrivateSky [themes](https://github.com/PrivateSky/?q=theme)</del>.
