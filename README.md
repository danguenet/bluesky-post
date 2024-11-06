# bluesky-post

A simple CLI tool to post text messages to [Bluesky](https://bsky.app/) directly from your terminal.

## Overview

`bluesky-post` is a lean command-line interface (CLI) tool designed to make it quick and easy to post text-based messages to the Bluesky social network. With just three straightforward steps—**install**, **init**, and **post**—you can share updates without leaving your terminal.

## Features

- **Quick Setup**: Initialize your login credentials once using the `init` command.
- **Easy Posting**: Post messages up to 300 characters directly from the CLI.
- **Lean Scope**: Focused solely on posting text messages for simplicity and efficiency.

## Installation

Install `bluesky-post` globally using npm:

```bash
npm install -g bluesky-post
```

## Setup

Before you can post messages, you need to initialize your configuration with your Bluesky credentials:

```bash
bluesky-post init
```

You'll be prompted to enter your Bluesky handle or email and your password. This information is stored securely in your home directory.

## Usage

### Post a Message

You can post a message in two ways:

#### 1. Provide the Message as an Argument

```bash
bluesky-post post "Your message here"
```

#### 2. Enter the Message Interactively

If you run the `post` command without providing a message, you'll be prompted to enter one:

```bash
bluesky-post post
```

```
Enter your message: 
```

Type your message and press **Enter** to post.

### Examples

#### Posting with a Message Argument

```bash
bluesky-post post "Hello from the CLI!"
```

#### Posting with Interactive Prompt

```bash
bluesky-post post
Enter your message: Just trying out bluesky-post!
```

## Character Limit

Please note that messages are limited to **300 characters**. The tool will prevent you from posting messages longer than this limit to comply with Bluesky's posting guidelines.

## Uninstallation

To uninstall `bluesky-post`, run:

```bash
npm uninstall -g bluesky-post
```

## Security

- **Credential Storage**: Your credentials are stored in a configuration file located at `~/.bluesky/config.json`.
- **File Permissions**: The configuration file is created with restricted permissions (`600`) to ensure that only your user account can read or write to it.
- **Best Practices**: It's recommended to keep your system secure and not share your credentials. Consider additional security measures if needed.

## Scope and Contribution

This project is intentionally lean, focusing solely on providing a quick way to post text messages to Bluesky from the CLI. The goal is to keep it simple and efficient with just the essential functionality:

1. **Install**: Get the tool on your system.
2. **Init**: Configure your Bluesky credentials.
3. **Post**: Share your message.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note**: This tool is not affiliated with or endorsed by Bluesky. Use it responsibly and in accordance with Bluesky's terms of service.
