//GENERATES CLEAKER DOCS
import { exec } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import { promisify } from 'util';

// Promisify exec for cleaner async usage
const execAsync = promisify(exec);

// Directory to generate JSDocs for
const cleakerDir = '/mnt/neuroverse/cleaker.me/modules/cleaker';

// Command to run for JSDoc generation
const command = 'jsdoc -c jsdoc.json';

// Function to generate JSDocs
async function generateCleakerJSDocs() {
  console.log(`Checking directory: ${cleakerDir}`);
  
  // Verify the directory exists
  if (!existsSync(cleakerDir)) {
    console.error(`Directory not found: ${cleakerDir}`);
    return;
  }

  console.log(`Entering directory: ${cleakerDir}`);

  try {
    // Execute the command
    console.log(`Generating JSDocs for Cleaker module...`);
    const { stdout, stderr } = await execAsync(command, { cwd: cleakerDir });
    
    console.log(`JSDocs generated successfully.`);
    if (stdout) console.log(`Output:\n${stdout}`);
    if (stderr) console.warn(`Warnings:\n${stderr}`);
  } catch (err) {
    console.error(`Error generating JSDocs for Cleaker module: ${err.message}`);
  }
}

// Execute the script
generateCleakerJSDocs()
  .then(() => {
    console.log('JSDocs generation completed.');
  })
  .catch(err => {
    console.error(`Unexpected error: ${err.message}`);
  });
