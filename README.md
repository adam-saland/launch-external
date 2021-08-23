# Launching an app asset using  launchExternalProcess

## How to use this repository.
1. `npm i` | `npm install`
2. `npm start` 

### App asset breakdown

`public/app.json`

```json
"appAssets": [{
    "src": "https://developer.openfin.co/release/chromium/x64/87.0.4280.47.zip",
    "version": "87.0.4280.47",
    "alias": "chromium-87",
    "target": "87.0.4280.47/chromium-87.0.4280.47/chrome.exe",
    "mandatory": true
}],
```

#### Property definitions

- `"src"`: url to an accessible compressed zip file containing the executable.
- `"version"`: a string to store that corresponds with the directory the application asset is stored under on disk.
- `"alias"`: a string that represents an identifier that can be used to invoke the asset from the application context in which it has been downloaded to. 
- `"target"`: relative extracted path to the executable file within the compressed zip.
- `"mandatory"`: in order for the application to start the appAsset must be successfully downloaded.
- APPLICATION-NAME: `"startup_app.name"`
- HASH: HASHED use to differentiate app instances.
- Default directory: 
```bash
%LOCALAPPDATA%\OpenFin\[APPLICATION-NAME]_[HASH]\assets\["alias"]\["version"]
```
> **Please Note**: APPLICATION-NAME and HASH are describing a folder name, they are **NOT** environment variables. 

### Corresponding code

`public/main.js`

- please refer to the comments on lines 2-10 for use of the `System.launchExternalProcess` API method implementation. 

License MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/ https://openfin.co/licensing/


