# Web Geeks GraphQL Playground

## Start playing

Make sure these are installed and up to date on your machine. You may want to run `brew update && brew upgrade` in your terminal.

* [Git](https://git-scm.com)
* [Node](https://nodejs.org/en/download/)
* [NPM](https://docs.npmjs.com/getting-started/installing-node)
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

1. First you'll need to start a graphQL server. We've already created a server that you can use complete with a data set on Pokemon characters.

```
git clone git@github.com:{{THIS_REPO}}
cd webgeeks-graphql-dojo
ls -la // You will see a directory for the API and UI
cd api
yarn
yarn start
```

2. Once you have the server up you'll then want to start playing around with the UI and make some graphQL calls.

```
cd .. && cd ui
yarn
yarn start
```
