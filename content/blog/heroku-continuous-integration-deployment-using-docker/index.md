---
title: Heroku Continuous Integration & Deployment using Docker
date: 2020-08-01T08:39:22.702Z
description: Heroku Continuous Integration & Deployment using Docker
categories:
  - Heroku
  - Docker
tags:
  - Heroku
  - Docker
---
## Introduction
`Heroku` is a Cloud Platform as a Service (PaaS) that makes it easy for developers to build, deploy, monitor, and scale their applications directly from their command line. Heroku’s flexibility allows developers to write applications in a variety of languages like Python, PHP, Node, Go, and many more. It’s available for free with some limitations and explicitly supports student developers. With great documentation, it’s a perfect platform to learn new technologies, architectural patterns, microservices, and automating deployment strategies.

Containerization allows developers to create and deploy applications faster with a wide range of other benefits like increased security, efficiency, agility to integrate with DevOps pipelines, portability, and scalability. Hence, companies and organizations are largely adopting this technology and it’s resulting in benefits for developers and removing overhead for the operations team in the software development lifecycle.

Benefits of having CI/CD pipeline:

Good code quality and testability
Faster development and code review
Risk mitigation
Deploy often

In this tutorial, we will be using Heroku to deploy our Node.js application through CircleCI using Docker. We will set up Continuous Integration and Deployment pipelines using Git (i.e our version control system), as a single source of truth.

Requirements
To complete this tutorial you will need the following:

Git and GitHub
Heroku free tier account
CircleCI
Node.js development environment
Docker and Docker Compose
Redis

Overview of Architecture
The application architecture is always fundamental and important so we can properly align our various components in a systematic way to make it work. Let’s define the architecture of our example application so that we can have a proper vision before writing our code and integrating CI/CD pipelines.

We’ll be using Docker to deploy our Node.js application. Docker provides the flexibility to ship the application easily to cloud platforms. We will be using CircleCI as our Continuous Integration and Deployment tool where we will run our unit and integrations tests. If tests are passed successfully, we are good to deploy our application on Heroku using Container Runtime.

Setup our Application
Let’s start working on this by creating a small Node.js project. I’ve already created a small Node.js application that uses Redis to store key/value pairs. You can find the application on GitHub repo under the nodejs-project branch.

You can fork and clone the repo and setup Node.js application locally by running the following--

```bash
$ git clone -b nodejs-project https://github.com/ankitjain28may/heroku-dockerize.git
$ cd heroku-dockerize
```

Our application uses Redis for storing key/values pairs so if you have Redis locally installed and running, we can test this application once locally before dockerizing it by running the following command:

```
$ npm start

# Output
> heroku-dockerize@1.0.0 start /heroku-dockerize
> node server.js

Example app listening at http://localhost:3000
Redis client connected
```