## Free React-CRA Boilerplate template

`FazTar` is an open-source React-cra boilerplate template written in TypeScript & ESLint, designed for developers and startups, who want to get started with a quick and professional application codebase with already-made CI server for both github and vercel.

This React-cra boilerplate template comes with three (3) written CI and one (2) CD on vercel and github pages, configured e2e Linting, Linting Before running pre-commits, and Liniting on CI server and few pre-installed libraries and dependencies which can be uninstalled or used if needed.

## Table of contents

- [Features](#features)
- [Google Lighthouse](#google-lighthouse)
  - [Performance](#performance)
  - [Accessibility](#accessibility)
  - [Best Practices](#best-practices)
  - [SEO](#seo)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

Your cra boilerplate will have everything you need to build a modern React app:

- 🎁 **Modern** – Template created using the latest version of React which provide insane API animationas also: State management using Hooks, Code-Splitting to reduce the bundle size.

- 💻 **Responsive** – Highly responsive and reusable UI components using React MAterialUI that is highly customizable and supports any form of styling variant and frameworks.

- 🚀 **Fast** – Buttery smooth experience when implemented with best practices and no third party dependencies to result in <b>PERFECT</b> Google Lighthouse scores

- 🏷 **TypeScript support** – FazTar can be written in TypeScript to improve the DX

- 🛸 **Routing** - Can generate dynamic routing using React-Router-Dom.

- 🤙 **Forms & Inputs** - Forms and Input Text Fields can be written using React-Hook-Form, to handle form state management and preventing unnecessary re-rendering to avoid impact on performance. Also handles form validation for data consistency and persistency, error management and form data submission. Same goes with Input Text Fields.

- ⚙️ **Maintenance** - Built with few dependencies for easy management and maintenance.

## Google Lighthouse

![1](https://user-images.githubusercontent.com/48876996/121569366-c313e000-ca31-11eb-940c-187f556ff0d6.png)

[Google Lighthouse][Google Lighthouse] is an open-source, automated tool for measuring the quality of web pages. Google Lighthouse audits performance, accessibility and search engine optimization of web pages.

### Performance

Audits for metrics like first paint and time to interactive to determine lag.

### Accessibility

Checks for common issues that may prevent users from accessing your content.

### Best Practices

Looks for everything from HTTPS usage to correct image aspect ratios.

### SEO

Checks for best practices to ensure your site is discoverable.

## Installation

You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). I recommend using the latest LTS version. You will also need to a vercel account

To get started with this cra-template new app, you have to:

Begin by

1. Fork the repo
2. Clone this repository to establish your own local copy. This process is straightforward and ensures you have all the necessary files and resources at your fingertips. You can find step-by-step instructions in this helpful article: Cloning a [repository on GitHub.com](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository).

Or you can skip step 1 and step 2 by simply running the command:

```js
npx create-react-app my-template --template faztar
```

3. Run the app using the command `npm start`

4. To deploy to vercel or github pages or both you have to do the following:

- ### To Vercel

  1. create a vercel account
  2. check out this video on how to create and consume your vercel id: [Use GitHub Actions to Deploy to Vercel (Preview & Production Deployments) by camelcase](https://www.youtube.com/watch?v=FHVaWZjWec4&t=150s&pp=ygUvKFByZXZpZXcgJiBQcm9kdWN0aW9uIERlcGxveW1lbnRzKSBieSBjYW1lbGNhc2U%3D)

- ### To Github Pages

  1. edit `homepage` property in the `package.json` file as foolow:

  ```js
  "homepage": "https://<github username>.github.io/<github repo-name>"
  ```

  Currently, the file has my repo and username. Go ahead and have it changed. 2. edit and run the following commands:

  ```git
  git remote add origin https://github.com/<github username>/<github repo-name>.git
  git push -u origin main
  ```

  ```js
  npm run deploy -- -m "Deploy React app to Github Pages"
  ```

  3. Visit the your repo that holds the project, then click on the settings tab, go to automation, then pages.

  - Configure the `Build & deployment` settings to the following:

  1. Source: set it to `Deploy from a branch`
  2. Branch:

     - Branch: set it to `master` or `main`
     - Folder: set it to `/(root)`

  3. Edit the `deployment.sh` file to have your own github details.

  That's all!

## What's included

- `reactmui` - React UI library that contains a set of high quality components.
- `react-router-dom` - High performance library for client-side routing and establishing endpoints.
- `styled-componets` - Variant on “CSS-in-JS”—which solves many of the problems with traditional CSS.
- `react-hook-form` - High Performance library for managing form state, errors and validation, and form data submission.
- - `gh-pages` - deploy the version of the app to GitHub Pages.

## Usage

Use it for whatever you want, and be sure to reach out to me on [WhatsApp](https://wa.me/08148106698) if you have any questions, or build something cool with it.

## License

Licensed under the MIT license.

[reactmui]: https://mui.com/material-ui/getting-started/
[react-hook-form]: https://react-hook-form.com/
[styled-componets]: https://github.com/styled-components/styled-components
[react-router-dom]: https://reactrouter.com/
[gh-pages]: https://pages.github.com/
[axios]: https://axios-http.com/docs/intro
[Google Lighthouse]: https://developers.google.com/web/tools/lighthouse
