# Learn at CAROBOTIX Website

<<<<<<< Updated upstream
[Learn at CAROBOTIX](https://learn.carobot.ca/) (https://learn.carobot.ca/)
=======
[Learn at CAROBOT](https://learn.carobot.ca/) ([https://learn.carobot.ca/](https://learn.carobot.ca/)) is an open-source learning tool and reference documentation for us here at [Canada Robotix](https://www.canadarobotix.com/) (CAROBOTIX INC.) and [CAROBOT Learning and Research Organization](https://www.carobot.org), our supporters, and everyone on the internet.
>>>>>>> Stashed changes

## Updating and Contributing

Thank you for your interest in helping us update and contribute to this website. We are happy to consider any contribution from our supporters.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Fork, Clone and Change

Create a fork of this repo then clone it onto your local machine.

```
$ git clone https://github.com/{your username}/carobot.hithub.io
$ cd carobot.github.io/
```
Create a new branch off of the `main` branch for your change.
```
$ git checkout -b {new branch name} main
```
Make your changes and save.

## Build

Once you are done with your changes, build the website.

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Submit Changes

Check to see which files have been modified.
```
$ git status
```
Add all the files that were modified to stage the changes in git.
```
$ git add file1 file2 file3 ...
```
Commit the changes.
```
$ git commit -m "A description of the changes..."
```
Push the changes to the branch of your fork.
```
$ git push origin {new branch name}
```
Create a [Pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) and add a description about your changes for the maintainers to review.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

This command is a convenient way to build the website and push it to the `gh-pages` branch.