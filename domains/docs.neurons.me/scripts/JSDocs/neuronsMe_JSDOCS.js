//generate neurons.me docs
import { exec } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import { promisify } from 'util';

// Promisify exec for cleaner async usage
const execAsync = promisify(exec);

// Directory to generate JSDocs for
const neuronsDir = '/mnt/neuroverse/https-neurons/modules/neurons.me';

// Command to run for JSDoc generation
const command = 'jsdoc -c jsdoc.json';

// Function to generate JSDocs
async function generateNeuronsJSDocs() {
  console.log(`Checking directory: ${neuronsDir}`);
  
  // Verify the directory exists
  if (!existsSync(neuronsDir)) {
    console.error(`Directory not found: ${neuronsDir}`);
    return;
  }

  console.log(`Entering directory: ${neuronsDir}`);

  try {
    // Execute the command
    console.log(`Generating JSDocs for Neurons.me module...`);
    const { stdout, stderr } = await execAsync(command, { cwd: neuronsDir });
    
    console.log(`JSDocs generated successfully.`);
    if (stdout) console.log(`Output:\n${stdout}`);
    if (stderr) console.warn(`Warnings:\n${stderr}`);
  } catch (err) {
    console.error(`Error generating JSDocs for Neurons.me module: ${err.message}`);
  }
}

// Execute the script
generateNeuronsJSDocs()
  .then(() => {
    console.log('JSDocs generation completed.');
  })
  .catch(err => {
    console.error(`Unexpected error: ${err.message}`);
  });
