# Infineon Design System Bootstrap Components
[![GitHub Repo Issues](https://img.shields.io/github/issues/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/pulls)
[![GitHub Repo Version](https://img.shields.io/github/package-json/v/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/blob/master/package.json)
[![GitHub Master Branch Weekly Commits](https://img.shields.io/github/commit-activity/w/Infineon/Infineon-Design-System-Bootstrap/master?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/tree/master)
[![GitHub Repo Contributors](https://img.shields.io/github/contributors/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/graphs/contributors)
[![GitHub Repo Discussions](https://img.shields.io/github/discussions/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/)
[![GitHub Repo Forks](https://img.shields.io/github/forks/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/)
[![GitHub Repo License](https://img.shields.io/github/license/Infineon/Infineon-Design-System-Bootstrap?style=plastic)](https://github.com/Infineon/Infineon-Design-System-Bootstrap/blob/master/LICENSE)

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

Use it to build & run storybook and distribute the Infineons Bootstrap SCSS.

### Built With

[![React][React.js]][React-url] [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right"><a href="#tableContent">back to top</a></p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/) v14
- [Npm](https://www.npmjs.com/) v6.14.13

### Installing Infineon Design System Bootstrap

#### With NPM

```npm install --save @infineon/design-system-bootstrap```

### Installing Font Awesome

If you are an infineon employee send an email to dds@infineon.com to get a fontawesome token key. Then execute this commands to configure your access to fontawesome pro.
```bash
npm config set "//npm.fontawesome.com/:_authToken" <PASTE KEY HERE>
```

After that you can follow your technology specific installation instractions that can be found here: 

For Angular: https://fontawesome.com/v5/docs/web/use-with/angular
For Vue https://fontawesome.com/v6/docs/web/use-with/vue/
For React: https://fontawesome.com/v6/docs/web/use-with/react/

### Importing Infineon Design System Bootstrap

After you install the Infineon Bootstrap module, you have to import it by copying the following line into your entry point file:
```bash
import "@infineon/design-system-bootstrap"
```

<!-- USAGE EXAMPLES -->
## Usage

Explore our components in Storybook.
https://storybook-bootstrap.icp.infineon.com

Simply copy & paste the sourcecode of any component into your application.

<p align="right"><a href="#tableContent">back to top</a></p>

## Contributing
If you want to contribute to this library first fork + clone it. Start local development and create a pull request to ```master``` from your fork.

### Start Storybook

For local testing you can start storybook on it's dev webserver. This will enable you to quickly develop with features like hot code replacement.

```bash
npm install
npm storybook-prepare
npm storybook-start
```

### Build Storybook

Use this script to build a storybook containg all components in this library. The result of this build will be placed in the ```.storybook-static``` folder and can be deployed on any simple webserver.

```bash
npm install
npm storybook-prepare
npm storybook-build
```

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
