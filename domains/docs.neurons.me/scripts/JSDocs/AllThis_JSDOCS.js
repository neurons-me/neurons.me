//GENERATES ALL.THIS DOCS.
import { exec } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import { promisify } from 'util';

// Promisify exec for cleaner async usage
const execAsync = promisify(exec);

// Base directory where the workspaces are located
const baseDir = '/mnt/neuroverse/all.this';

// List of directories to process (including the base repository)
const directories = [
  '.', // Represents the base repository `/mnt/neuroverse/all.this/`
  'workspaces/be.this',
  'workspaces/this.audio',
  'workspaces/this.be',
  'workspaces/this.dictionaries',
  'workspaces/this.dir',
  'workspaces/this.document',
  'workspaces/this.DOM',
  'workspaces/this.env',
  'workspaces/this.GUI',
  'workspaces/this.img',
  'workspaces/this.me',
  'workspaces/this.pixel',
  'workspaces/this.text',
  'workspaces/this.url',
  'workspaces/this.video',
  'workspaces/this.wallet',
];

// Command to run in each directory
const command = 'jsdoc -c jsdoc.json';

// Iterate through the directories and execute the command
async function runCommands() {
  for (const dir of directories) {
    const fullPath = join(baseDir, dir);

    // Log when entering a directory
    console.log(`Checking directory: ${fullPath}`);
    
    if (!existsSync(fullPath)) {
      console.error(`Directory not found: ${fullPath}`);
      continue;
    }

    console.log(`Entering directory: ${fullPath}`);

    try {
      // Execute the command
      console.log(`Generating documentation for: ${dir === '.' ? 'base repository' : dir}...`);
      const { stdout, stderr } = await execAsync(command, { cwd: fullPath });
      
      console.log(`Documentation generated for ${dir === '.' ? 'base repository' : dir}.`);
      if (stdout) console.log(`Output for ${dir}:\n${stdout}`);
      if (stderr) console.warn(`Warnings for ${dir}:\n${stderr}`);
    } catch (err) {
      console.error(`Error processing ${dir === '.' ? 'base repository' : dir}: ${err.message}`);
    }

    console.log(`Finished processing: ${dir === '.' ? 'base repository' : dir}`);
  }
}

// Execute the script
runCommands()
  .then(() => {
    console.log('All commands executed successfully.');
  })
  .catch(err => {
    console.error(`Unexpected error: ${err.message}`);
  });
