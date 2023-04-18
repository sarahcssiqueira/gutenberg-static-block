# Basic Block

To use this basic block, just clone this repository, pull the files to your machine.

Run ` npm install ` to install the needed dependences. Although the only dependencie needed is [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts) which you can install by typing:

`npm install @wordpress/scripts --save-dev`

[b]Requirements[/b]

To use this dependence you will need:

- Node.js 14.0.0 or later
- Npm 6.14.4 or later. 
- It is not compatible with older versions.

# Let's get to work!

#### Package.json 

#### index.php

Rename your plugin to whatever you want to better describe your needs/purpose of your project.

### block.json

Setup the metadata of your block, for example:
 - name
 - version
 - category
 - icon

## /src folder

 - index.js: is the entry point
 - edit.js: is where you’ll build the block admin interface
 - save.js: is where we build the block structure to be saved into the database

## /build folder

Run `npm run build` to build your files to build folder