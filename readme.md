# Nebula - CM360 Floodlight Management for React Applications

## Introduction

Nebula is a package designed to facilitate the management of CM360 (Campaign Manager 360) floodlight tags within React applications. It builds upon the functionality of the previously existing npm package, "Goofls," while offering enhanced performance and ease of installation. Nebula provides three essential functions to help you integrate floodlight tags seamlessly into your React projects.

## Installation

You can install Nebula using npm or yarn.

```shell
npm install nebula
```

```shell
yarn add nebula
```

```shell
pnpm add nebula
```

Or import directly in your html

```html
<html>
    <head>
        <script src="https://nebula.placedv.com/nebula/latest/index.js" async type="text/javascript"></script>
    </head>
    <body>
        // ...
    </body>
</html>
```

# Basic usage

Nebula offers three main functions that are crucial for integrating CM360 floodlight tags into your React applications: `nebula.init()`, `nebula.floodlight()`, and `nebula.event()`.

Below, you will find a detailed explanation of each function and its required parameters.

**Nebula** works to generate a `global_site_tag`, `iframe` and `image` tags are deprecated.

Read more about gtag [here](https://support.google.com/tagmanager/answer/7582054?hl=it).

## nebula.init

This function initializes Nebula and is mandatory to set up your CM360 floodlight management. The required parameter is:

| Value | Type | Required | Description |
| :---          | :--- | :--- | :--- |
| `gtag` | `string` | true | The ID of the Google Global Site Tag (gtag) associated with your CM360 account. |

### Example

```javascript
nebula.init('DC-6334513');
```

## nebula.floodlight

This function is used to trigger specific floodlight events. The required parameters are:

| Value | Type | Required | Description |
| :---          | :--- | :--- | :--- |
| `type` | `string` | true | The ID of the floodlight type. |
| `cat` | `string` | true | The ID of the floodlight category. |
| `custom_variables` | `object` | false | This parameter allows you to specify custom variables for the floodlight event. |

### Example

```javascript
nebula.floodlight('mynme0', 'testu0', {
    u1: '[ref]'
});
```

## nebula.event

Use this function to track events associated with your CM360 floodlight tags. The required parameters are:

| Value | Type | Required | Description |
| :---          | :--- | :--- | :--- |
| `counting_method` | `string` | true | The type of event counting method (e.g., 'conversion,' 'standard,' 'sale'). |
| `allow_custom_scripts` | `string` | true | A boolean value indicating whether to allow third-party tags (custom scripts) to be executed. |

### Example

```javascript
nebula.event('conversion', false);
```

# Example

This code demonstrates a basic implementation of Nebula within a React application, initializing CM360 floodlight management and triggering a floodlight event when the component is mounted. Developers can build upon this foundation to incorporate more advanced tracking and event management into their React applications with Nebula.

```javascript
import {useEffect} from 'react'
import nebula from 'nebula'

function App() {
    useEffect(() => {
        nebula.init('DC-6334513')
        nebula.floodlight('mynme0', 'testu0', {u1: '[ref]'})
        nebula.event('conversion', false)
    }, [])
    return (
        <>
            Test Application
        </>
    )
}

export default App;
```

Or inside your html application.

```html
<html>
    <head>
        <script src="https://nebula.placedv.com/nebula/latest/index.js" async type="text/javascript"></script>
    </head>
    <body>
        <script>
            nebula.init('DC-6334513')
            nebula.floodlight('mynme0', 'testu0', {
                u1: '[ref]'
            })
            nebula.event('conversion', false)
        </script>
    </body>
</html>
```
