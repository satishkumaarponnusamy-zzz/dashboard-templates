# dashboard-templates
Templating Visual Studio Team Services or Team Foundation Server dashboard

## Setup
1. [Download](https://nodejs.org/en/download/) and install Node.js
2. Run `init.bat`

## NPM scripts
1. `npm run build` - builds, creates package as part of post build 
* In `postbuild` change `debug-package` to `package` for creating production version of extension
2. To package and publish directly to the Marketplace on build, change the `postbuild` script to run the `gallery-publish` script (instead of package). You can then run `npm run build -- --token xxxxxx` (where xxxx is you personal access token for publishing to the Marketplace) to build, package, and publish your extension.

## Debugging
While developing extension and testing it using TFS, developer can update html, javascript and css without having to republish extension.
* To do that in IIS, create a virtual directory under Default Web Site and map it to project root folder. Add this alias/virtual directory name to baseUri in vss-extension.debug.json `"baseUri": "http://localhost/<alias>"`.
 * Now installed extension will use files from this folder.
 In production version, files are packaged into extension.

 ## References
 [Visual Studio Services Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk)