# open plugin

This plugin allows user to open a local file.

~~~ javascript
import openPlugin from '@react-pdf-renderer/open';
import '@react-pdf-renderer/open/styles.css';

const openPluginInstance = openPlugin();

// The button to open a file
const { OpenButton } = openPluginInstance;

// Render
return (
    <>
    <OpenButton />
    <Viewer
        plugins={[
            openPluginInstance,
        ]}
    >
    </>
);
~~~

## Use a custom input

~~~ javascript
import openPlugin from '@react-pdf-renderer/open';

const openPluginInstance = openPlugin();

// The button to open a file
const { OpenButton } = openPluginInstance;

// Render
return (
    <>
    <OpenButton>
    {
        (props) => (
            // Your custom input here
            <input
                multiple={false}
                type='file'
                title=''
                onChange={props.onClick}
            />
        )
    }
    </OpenButton>
    <Viewer
        plugins={[
            openPluginInstance,
        ]}
    >
    </>
);
~~~