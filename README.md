# Infineon Design System Bootstrap Components

<!-- TABLE OF CONTENTS -->
<details id="tableContent">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#local-development">Local Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints.

This repository contains an Bootstrap implementation of Infineons Digital Design System and it's Storybook sourcecode.

Use it to build & run storybook and distribute the Bootstrap SCSS.

As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints.

This repository contains an Bootstrap implementation of Infineons Digital Design System and it's Storybook sourcecode.

Use it to build & run storybook and distribute the Bootstrap SCSS.


### Built With

* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right"><a href="#tableContent">back to top</a></p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/) v14 or older.
- [Yarn](https://classic.yarnpkg.com/en/) v1.22.10 or older, or [Npm](https://www.npmjs.com/) v6.14.13 or older.

### Installation on React, Vue or Angular

#### With NPM

1. ```npm install --save @infineon/design-system-bootstrap```

#### With Yarn

1. ```yarn add @infineon/design-system-bootstrap```

2. Send an email to dds@infineon.com to get the fontawesome token key. Then execute these two commands:
```bash
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" <PASTE KEY HERE>

### Quick Start Vue.JS
1. Install using NPM
```bash
npm install --save @infineon/design-system-bootstrap
```

2. Add the import to your main.js:
*JavaScript:*
```js
import "@infineon/design-system-bootstrap";
```
Additional Fontawesome installation instructions can be found here: 


For Angular: https://fontawesome.com/v5/docs/web/use-with/angular <br />
For Vue https://fontawesome.com/v6/docs/web/use-with/vue/ <br />
For React: https://fontawesome.com/v6/docs/web/use-with/react/

<p align="right"><a href="#tableContent">back to top</a></p>

<!-- USAGE EXAMPLES -->
## Usage

Explore our components in Storybook.

https://storybook-bootstrap.icp.infineon.com

3. Use Storybook to explore our components (available only in intranet)

https://storybook-bootstrap.icp.infineon.com

4. Install FontAwesome Pro Icons (optional)

Mail to dds@infineon.com to get an fontawesome pro token if you are an Infineon employee. Then execute these two commands:
```bash
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" FONT-AWESOME-PACKAGE-TOKEN
```

After that follow the installation instructions for vue at https://fontawesome.com/v6/docs/web/use-with/vue/#contentHeader

<p align="right"><a href="#tableContent">back to top</a></p>

## Local Development

### Installation

Install all the modules and dependencies listed on the ```package.json``` file with:

```bash
yarn install
```

or
```bash
npm install
```

### Build Storybook

To deploy Storybook, we first need to export it as a static web app.
To do so, we can use the inbuild ```build-storybook``` command with ```npm``` or ```yarn```.

```bash
yarn build-storybook
```

or

```bash
npm build-storybook
```

This will generate a static Storybook in the ```storybook-static``` directory.

### Start Storybook

To start storybook, simply run the inbuild command ```start-storybook``` with ```npm``` or ```yarn```.

```bash
yarn start-storybook
```

or

```bash
npm start-storybook
```

```start-storybook``` also executes ```watch-css``` and ```watch-storybook``` which automatically update storybook on code change.

<p align="right"><a href="#tableContent">back to top</a></p>

<!-- CONTACT -->
## Contact

### WebEx
Yanchev Tihomir <br />
Werther Kai

### Email
tihomir.yanchev-EE@infineon.com <br />
kai.werther@infineon.com

<p align="right"><a href="#tableContent">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
