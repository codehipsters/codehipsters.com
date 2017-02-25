Code Hipsters website
---------------------
This repo contains the source code of [codehipsters.com](http://codehipsters.com) website.
The website is intended to be a collection of resources related to the Code Hipsters team.

### Who are they?
**Code Hipsters** (or CH) — is a non-profit IT-community with a mission to spread knowledge about brand cutting-edge trends in
open-source tools, modern *front/back/devops* development, art and design. The community was originally founded back in **2014** in 
Rostov-on-Don and currently consists of:

  * [Eugeny Pshenichniy](https://github.com/ujenjt)
  * [Victor Suzdalev](https://github.com/kadmil)
  * [Alexey Taktarov](https://github.com/molefrog)
  * [Tikhon Belousko](https://github.com/dazzz)

Although these are the people who were there from the very beginning, but the whole project wouldn't be possible without 
help of [Benjamin Tambourine](https://github.com/vtambourine), [Sam Kozin](https://github.com/skozin) and others.

### Some thoughts on code-style
Please, remove trailing spaces in files, use 2-space indent and prefer removing code instead of commenting it. 
Use comments to outline things that are not obvious, put links to Stack Overflow or other resources if you 
found an interesting bug.

We use [BEM](http://getbem.com/) methodology in our styles. The JavaScript codebase is written according to [Standard](http://standardjs.com/) code style. Please, install linter in your text editor and avoid commiting code with warnings.

### How to build and deploy the website
The website uses Brunch plus a few of custom scripts for compiling static templates. In order to start development
server run `npm run start`.

The deployment process is dumb and simple, but it works ok for this kind of the website. When you're ready to deploy first build templates with `npm run build`, commit built files (this step is messy, but
this is the only way to deploy to `gh-pages`) and finally run `npm run deploy`. The deployment is possible by [this tool](https://www.npmjs.com/package/gh-pages-deploy) so there is no need to always keep two equal branches. 

### License
Copyright 2017, Code Hipsters

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
