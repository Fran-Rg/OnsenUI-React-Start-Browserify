# Onsen UI React Start point with Browserify

This repo gives you all the tools for starting an OnsenUI-react project using browserify and watchify.

Please check out [Onsen Official Documentation](https://onsen.io/v2/guide/react/) for more info on OnsenUI.
Please check out [React start guide](https://reactjs.org/docs/hello-world.html) for more info on React.
Please check out [Browserify Official Documentation](http://browserify.org/#install) for more info on Browserify/Watchify.

You need to clone the repo and compile the source from main.js to dist.js:

```
git clone git@github.com:IVBakker/OnsenUI-React-Start-Browserify.git
cd OnsenUI-React-Start-Browserify
npm install
npm run copy-css
npm run serve #this will serve the static files
#in a second terminal
npm run watch #this will watch for modification and recompile the JS if needed
npm run browserify #this compile the JS once and show you the errors if any
```

Once everything is compiled, visit [http://127.0.0.1:8080](http://127.0.0.1:8080).
