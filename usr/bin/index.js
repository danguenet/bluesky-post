#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const prompts = require('prompts');
const os = require('os');
const path = require('path');
const { BskyAgent } = require('@atproto/api');

const program = new Command();
const configDir = path.join(os.homedir(), '.bluesky');
const configPath = path.join(configDir, 'config.json');

// Ensure the config directory exists
fs.ensureDirSync(configDir);

// Initialize Command
program
  .command('init')
  .description('Initialize Bluesky login configuration')
  .action(async () => {
    const response = await prompts([
      {
        type: 'text',
        name: 'identifier',
        message: 'Enter your Bluesky handle or email:'
      },
      {
        type: 'password',
        name: 'password',
        message: 'Enter your password:'
      }
    ]);

    // Save credentials to config file
    await fs.writeJson(configPath, response, { mode: 0o600 });
    console.log('Configuration saved!');
  });

// Post Command
program
  .command('post [message]')
  .description('Post a message to Bluesky')
  .action(async (message) => {
    // Prompt for message if not provided
    if (!message) {
      const response = await prompts({
        type: 'text',
        name: 'message',
        message: 'Enter your message:'
      });
      message = response.message;

      // Exit if no message is entered
      if (!message) {
        console.error('Error: No message provided.');
        process.exit(1);
      }
    }

    if (message.length > 300) {
      console.error('Error: Post must be 300 characters or less.');
      process.exit(1);
    }

    // Load credentials
    if (!fs.existsSync(configPath)) {
      console.error('Error: Configuration not found. Please run "bluesky-post init" first.');
      process.exit(1);
    }

    const { identifier, password } = await fs.readJson(configPath);

    const agent = new BskyAgent({ service: 'https://bsky.social' });

    try {
      await agent.login({ identifier, password });
      await agent.post({ text: message });
      console.log('Post successful!');
    } catch (error) {
      console.error('Error posting message:', error.message);
    }
  });

program.parse(process.argv);
