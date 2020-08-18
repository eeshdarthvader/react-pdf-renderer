# React PDF viewer
A React component to view a PDF document.
It's written in TypeScript, and powered by React hooks completely.

## Usage


1. Install packages

~~~ console
$ npm install pdfjs-dist@2.4.456
$ npm install @scacap/react-pdf-viewer
~~~

2. Import CSS and components

~~~ javascript
import Viewer, { Worker } from '@scacap/react-pdf-viewer';

import '@scacap/react-pdf-viewer/cjs/react-pdf-viewer.css';
~~~

3. Use the component

~~~ javascript
<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
    <div style={{ height: '750px' }}>
        <Viewer fileUrl="/path/to/document.pdf" />
    </div>
</Worker>
~~~

## Commands

1. Build:

~~~ console
$ npm run build
~~~

Then it will produce two formats available in the `dist` folder:

~~~
└─── dist
    ├─── cjs    // CommonJS package
    └─── umd    // UMD package
~~~

2. Dev mode:

~~~ console
$ npm run dev
~~~

The bundler will watch the entire `src` folder and build the `cjs` package when any source file is changed.

3. Lint:

~~~ console
$ npm run lint
~~~

It will check if the entire source code compatible with 
* [ESLint](https://eslint.org)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

                      |
