## SharePoint Project Scaffold

### Important: Do not clone this repo directly into your new project

#### This node.js based project scaffold is a superset of [this scaffold](https://github.com/moabs81/scaffold2) and operates in much the same way. 
For instructions on how to install this scaffold, please refer to the section on [global dependencies](https://github.com/moabs81/scaffold2#global-dependencies) and the instructions to [set up a project with the scaffold](https://github.com/moabs81/scaffold2#how-to-set-up). 

This project has React baked into it. JQuery is also present for the dev testbed page, but it is not included in the SharePoint package build (although it can be configured to - but really, don't).

#### How to run

Like the subordinate scaffold project, this toolset uses npm scripts and a chain of Webpack plug-ins and loaders rather than a task runner like gulp or grunt. See 'package.json' for the NPM scripts used to run the dev environment. As a first troubleshooting step, see the [list of globals](https://github.com/moabs81/scaffold2#global-dependencies) if you have problems running the scripts.

* To run the dev server, use <code>npm run dev</code> and navigate to ht<span>tp://</span>localhost:4000 to view the CustomApp within the testbed page
* To run the fake API, use <code>npm run API</code>. The base URL of the API is ht<span>tp://</span>localhost:3000
* To run the test suite independently, use npm run test. To make the test suite way more fun, edit './test/mocha.opts' and change '--reporter' to 'nyan' - I mean, [really](https://www.youtube.com/watch?v=QH2-TGUlwu4)
* To test, clean, and build the project within the testbed page, use <code>npm run TCB</code>. See package.json for more insight into this script.
* To build and deploy the project to a SharePoint site, use <code>npm run spBU</code>. PLEASE READ THE COMMENTS LOCATED IN 'uploadToSPLibrary.ps1' BEFORE USING THIS SCRIPT. 
* Other scripts exist in 'package.json' that can be used for various tasks. 