---
title: Markdown Preview
date: 2020-08-01T13:48:16.725Z
description: Markdown Preview
tags:
  - Markdown
  - blog
---
# Title Header (H1 header)

### Introduction (H3 header)

This is some placeholder text to show examples of Markdown formatting. We have [a full article template](https://github.com/do-community/do-article-templates) you can use when writing a DigitalOcean article. Please refer to our style and formatting guidelines for more detailed explanations: [do.co/style](do.co/style)

## Prerequisites (H2 header)

Before you begin this guide you'll need the following:

- Familiarity with [Markdown](https://daringfireball.net/projects/markdown/)

## Step 1 — Title Case

This is _italics_ and this is **bold**.

Here's a configuration file with a label:

```nginx
[label /etc/nginx/sites-available/default]
server {
    listen 80 default_server;
    . . .
}
```

Here's output from a command with a secondary label:

```
[secondary_label Output]
Could not connect to Redis at 127.0.0.1:6379: Connection refused
```

## Step 2 — Title Case

This is `inline code`. This is a <^>variable<^>. This is an `<^>in-line code variable<^>`.

This is a non-root user command example:

```command
sudo apt-get update
```

This is a root command example:

```super_user
adduser sammy
```

This is a custom prefix command example:

```custom_prefix(mysql>)
FLUSH PRIVILEGES;
```

## Step 3 — Title Case

Here's how to include an image:

![Alt text for screen readers](https://assets.digitalocean.com/logos/DO_Logo_horizontal_blue.png)

Here is a note, a warning, some info and a draft note:

<$>[note]
**Note:** Use this for notes on a publication.
<$>

<$>[warning]
**Warning:** Use this to warn users.
<$>

<$>[info]
**Info:** Use this for product information.
<$>

<$>[draft]
**Draft:** Use this for notes in a draft publication.
<$>


## Conclusion

Please refer to our [writing guidelines](http://do.co/style) for more detailed explanations on our style and formatting.
