<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">We are the Champions</h3>

  <p align="center">
    My solo project - We are the Champions (from The Frontend Developer Career Path of Scrimba)
    <br />
    <a href="https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jen-endorsements-react-vite-pwa-firebase.netlify.app/" target=”_blank”>View Demo</a>
    ·
    <a href="https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/issues">Report Bug</a>
    ·
    <a href="https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
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
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#issues-and-solutions">Issues and solutions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

My solo project - We are the Champions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Vite][Vite]][Vite-url]
- [![React][React.js]][React-url]
- [![TypeScript]][TypeScript]
- [![FontAwesome][FontAwesome]][FontAwesome-url]
- [![UnoCSS][UnoCSS]][UnoCSS-url]
- [![Firebase][Firebase]][Firebase-url]
- [![ESLint][ESLint]][ESLint-url]
- [![Prettier][Prettier]][Prettier-url]
- [Husky][Husky-url]
- [VitePWA][VitePWA-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation

Install packages

```sh
yarn
```

Launch at localhost in development mode

```sh
yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [x] Setup and ESLint, Prettier, Husky
- [x] Setup UnoCSS
- [x] Setup Font Awesome
- [x] Setup Firebase
- [ ] Setup and config PWA
- [ ] Form to input fields
- [ ] Reverse cards order (latest should be on the top)
- [ ] Whenever data table is changed in Firebase, render the cards
- [ ] Like feature (same card can only be liked by the same person for one time, same person can like many cards)
- [ ] Refactor
  - [ ] Manage firebase related files

See the [open issues](https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES AND SOLUTIONS -->

## Issues and solutions

### Incorrect data type when setting data array using `snapshot.val()` from `onValue` function of firebase

#### Solution

Extract `childSnapshot` from the `snapshot` object

```
const dataArray: EndorsementData[] = [];

snapshot.forEach(function (childSnapshot) {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;

    dataArray.push(item);
});
```

### `Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.` When update state in `onValue` function of firebase

#### Solution

Wrap `onValue` in `useEffect`,

```
const [endorsementData, setEndorsementData] = useState<EndorsementData[]>([]);

...

useEffect(() => {
    return onValue(endorsementsRef, (snapshot) => {

      if (!snapshot.exists()) {
        console.log("Cannot find snapshot");
        return;
      }

      const dataArray: EndorsementData[] = [];

      snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;

        dataArray.push(item);
      });

      setEndorsementData(dataArray);
    });
  }, []);
```

### Push empty array to firebase become undefined value

#### Solution

push boolean instead, make field `likedBy` to be `false` when the array is empty

```
export type EndorsementData = {
    id: string;
    from: string;
    to: string;
    text: string;
    likedBy: string[] | boolean;
};
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<!-- Jen Chen - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->

Jen Chen

Project Link: [https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase](https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Scrimba](https://scrimba.com/)
- [How to Connect Firebase Realtime Database to a React App](https://innovance.com.tr/how-to-connect-firebase-realtime-database-to-a-react-app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/yujhenchen/endorsements-react-vite-pwa-firebase.svg?style=for-the-badge
[contributors-url]: https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yujhenchen/endorsements-react-vite-pwa-firebase.svg?style=for-the-badge
[forks-url]: https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/network/members
[stars-shield]: https://img.shields.io/github/stars/yujhenchen/endorsements-react-vite-pwa-firebase.svg?style=for-the-badge
[stars-url]: https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/stargazers
[issues-shield]: https://img.shields.io/github/issues/yujhenchen/endorsements-react-vite-pwa-firebase.svg?style=for-the-badge
[issues-url]: https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/issues
[license-shield]: https://img.shields.io/github/license/yujhenchen/endorsements-react-vite-pwa-firebase.svg?style=for-the-badge
[license-url]: https://github.com/yujhenchen/endorsements-react-vite-pwa-firebase/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[FontAwesome]: https://a11ybadges.com/badge?logo=fontawesome
[FontAwesome-url]: https://fontawesome.com/
[UnoCSS]: https://img.shields.io/badge/unocss-333333.svg?style=for-the-badge&logo=unocss&logoColor=white
[UnoCSS-url]: https://unocss.dev/
[Firebase]: https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase
[Firebase-url]: https://firebase.google.com/
[ESLint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Prettier]: https://ziadoua.github.io/m3-Markdown-Badges/badges/Prettier/prettier1.svg
[Prettier-url]: https://prettier.io/
[Husky-url]: https://typicode.github.io/husky/
[VitePWA-url]: https://vite-pwa-org.netlify.app/
