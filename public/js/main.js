document.addEventListener('DOMContentLoaded', () => {
    /**
     * @key alias: <string> the name suplied to the appAsset in the app.json file.
     * @key target: <string> the relative path to the executable from the appAssets [alias]/[version].
     * @key arguments: <string> a string of acceptable arguments for the given executable.
     * @key listener: <function> listener, @param result: <object> = {topic: string, uuid: string, exitCode: number}.
     * @returns Promise<Object>: object containing the uuid of the launched executable { uuid: string }.  
     */

    // Note: because the app asset version for the alias is known, we only have to supply any sub-directories here, and the executable name. 
    fin.System.launchExternalProcess({
        alias: 'chromium-87', 
        target: 'chromium-87.0.4280.27\\chrome.exe', 
        arguments: '"https://github.com"', 
        listener: async (result) => {
            console.log('result', result);
            if (result.exitCode === 1) { console.log("Chrome Has Exited") }
        }
    })
    .then((data) => console.log('successfully launched chrome.exe: ', data))
    .catch(console.error)
});