# Micro Front end sample app

## Overview

Microfrontends are used to divide a large app into a series of smaller apps.
Example has 3 separate application stickec togethe in a container

- Marketing - React
- Authentication - React based
- Dashboardd - Vue based
- Container - React based

## Features

- Full cyccle of development <> build <> deploy
- Separate CI/CD for each app
- CSS scoping
- Perfomant, scalable
- Dependency sharing between Apps
- Cross app navigation

## Steps to setup

Clone project

```sh
git clone https://github.com/khus29/microfrontends-poc.git
```

Go to each app direcctory and install dependencies

```sh
npm install
```

To start apps, use start script in each directory. Apps will start at different ports.

For CI, githu pipeline is used. Each app has its own yml file at:-

```sh
.github/workflows
```

For deployment we are using Amazon Cloudfront. S3 busket is used for storage of build files.
