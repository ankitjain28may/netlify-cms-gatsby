---
title: Sharing Vue Components in two or more microservices using Bit
date: 2020-08-01T18:06:55.389Z
description: we’ll learn how to share Vue components in two or more
  microservices using Bit and make the maximum use of Bit.
---
In this post, we’ll learn how to share Vue components in two or more microservices using Bit and make the maximum use of Bit. This can help us to effectively use Bit to version control our every file and components.

### What is Bit?

Bit is an open-source tool which offers a sort of a semantic layer on top of our regular Git through which we can version control every individual component and Hence, Bit is a tool for components collaboration. Bit is a combination of two tools: a component hub ([bit.dev](http://bit.dev/)) and a CLI tool

Well, That’s something amazing about Bit, now it’s even easier for us to version our small individual components/code, unlike Git. You can read more about **How Bit works** through this [blog post](https://docs.bit.dev/docs/how-bit-works).

Before moving forward about How we can use Bit in simple 5 steps to sharing Vue Components, Let’s understand the key features provided by the Bit.

### Key Features

Some of the key features of Bits:

1. Version each component individually.
2. Extract a component for sharing directly from an existing project.
3. Build and test each component separately from the rest of the app.
4. Change the source code of the received components inside your project.
5. Get changes in components on top of local changes.
6. Contribute back changes made to components directly from your project.
7. Auto-generated package.json for each component. Reduces overhead.
8. Automated component versioning according to changes in the dependency graph chain.
9. Works alongside with Git, NPM and Yarn.

### Setup

Before moving further, let’s install the Bit CLI tool to setup Bit workstation. Install it using `npm`:

```

```

You can read more about installing Bit from [Bit Docs](https://docs.bit.dev/docs/installation).

Let’s create a new folder with a name `bit-learning`

```

```

Now, create a collection on [bit.dev](http://bit.dev) as well with the same name `bit-learning`.

![](https://cdn-images-1.medium.com/max/1600/1*nsnjp_i-567aoudLreOWGw.png)

[ankitjain28may/bit-learning](https://bit.dev/ankitjain28may/bit-learning/helloworld)

Awesome, we have installed the Bit CLI and created collection on bit.dev, let’s move forward with creating components and version control them using Bit CLI.

### Make a Component

Let’s make a dummy **Helloworld** component in Vue. Install vue using `npm`

```

```

Now, create a folder named `components` and create `Helloworld.vue` file inside the components directory and add the following code.

![](https://cdn-images-1.medium.com/max/1600/1*6E9aWBg0QBAX4dp7io5Yvg.png)

[Helloworld.vue](https://carbon.now.sh/?bg=rgba%28171%2C%20184%2C%20195%2C%201%29&t=dracula&wt=none&l=vue&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=52px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=%250A%253Ctemplate%253E%250A%2509%253Cp%253EHelloworld%253C%252Fp%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%253C%252Ftemplate%253E%250A%253Cscript%253E%250A%2520%2520export%2520default%2520%257B%250A%2520%2520%2520%2520name%253A%2520%27Helloworld%27%2520%250A%2520%2520%257D%250A%253C%252Fscript%253E%250A)

### Initialize Bit workspace

We need to initialize bit to version control components by running this command:

```

```

We are going to use bit scoped registry to export/import components from Bit (bit.dev) cloud hosting so we need to authenticate by running:

```

```

We have successfully authenticated and initialized our bit workspace. Now move forward to another step of adding/tracking our components.

### Add Components

To add/version control components using Bit, we need to use `add` command. It is similar to `git add` command but for every component/file rather than the complete repo.

```

```

We can add as many components as we want by running a command like this:

```

```

We can also use flags like `--namespace` and `--id` to organize component in a namespace and to manually set component id respectively.

```

```

Let’s check the status of all the added components.

```

```

### Tag Components

To publish our components, we need to tag it with a proper version. It is similar to `git commit` command. We can export the tagged components to bit.dev cloud hosting and share the code in other microservices/projects.

```

```

On running `bit status` command, we can see that bit has staged our components which we can export to our collection we have made on bit.dev in the beginning to share our component.

We can also untag our components by running `bit untag <component name>`.

### Export Components

Let’s export our component to the bit scoped registry so it can be available to all based on the Privacy while creating a collection.

```

```

Let’s open our collection on [bit.dev](http://bit.dev), we can see our component there with version 1.0.0

![](https://cdn-images-1.medium.com/max/1600/1*C8GonOHn67aDBDzw-7G7UA.png)

[ankitjain28may/bit-learning/helloworld](https://bit.dev/ankitjain28may/bit-learning/helloworld)

We can also render the component under component example.

![](https://cdn-images-1.medium.com/max/1600/1*32UrCJUeroB23fdhxBMDTg.png)

[ankitjain28may/bit-learning/helloworld](https://bit.dev/ankitjain28may/bit-learning/helloworld)

### Installing Components

It is very easy to install components in other projects. we can use Bit, NPM and Yarn to import them. Let’s install it using NPM:

```

```

![](https://cdn-images-1.medium.com/max/1600/1*COToEaBZqBg5mxoe6ADQ6A.png)

As we can see that our component is installed as a node_module in our project, similarly we can install it in our project.

### Importing Components

Let’s understand, how can we make changes in the collection from any working project and export it directly to the collection. In that case, we need to import the collection using `bit`:

```

```

Before importing, make sure to remove the current component or change the directory to test it. If we are the author of the component, the changes will be reflected in the same component else the component is imported in the `components/helloworld` directory.

![](https://cdn-images-1.medium.com/max/1600/1*30JjUt-0elX8PazsCBfP6A.png)

Now we can make changes in the `Helloworld.vue` file from the current working project and can make a release with a different version with which we can update our other projects without any hassle.

We can see the diff using `bit diff` command:

![](https://cdn-images-1.medium.com/max/1600/1*YIyIUpq89Cz6vMS8WOL77A.png)

I have updated the component and can see the diff, let’s tag this with new version and export it to the collection.

```

```

![](https://cdn-images-1.medium.com/max/1600/1*RooLtET09KVzfQiE9gATBA.png)

[ankitjain28may/bit-learning/helloworld](https://bit.dev/ankitjain28may/bit-learning/helloworld)

As we can see the new version i.e **v1.1.0** which we can update in our other repos either using NPM, Yarn or by using Bit CLI. Learn more about importing components from [Bit Docs](https://docs.bit.dev/docs/sourcing-components).

### Conclusion

In this article, we first understood what is Bit and how we can use it for versioning our each and every Vue component. Bit provides [bit.dev](https://bit.dev/) cloud hosting solution for private and public components sharing with advanced features such as components CI and showcase. Apart from that, we can also set up our own server for sharing components.

Feel free to comment and ask me anything. You can follow me on [Twitter](https://twitter.com/ankitjain28may) and [Medium](https://medium.com/@ankitjain28may). Thanks for reading! 👍