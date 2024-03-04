# Scaffolding

This is a synced fork of [TurboWarp/packager](https://github.com/TurboWarp/packager). The reason for the fork is that the published npm module at [@turbowarp/packager](https://www.npmjs.com/package/@turbowarp/packager) only supports running on Node.js, while we only need a part of the module for our own use on the browser only, which is "scaffolding".

Therefore this fork publishes a npm library called `@fireworks-studios/scaffolding` as the upstream repository commits updates.

A few more modifications have been made to this fork; such as not exposing Scaffolding as `window.Scaffolding` anymore, but just exporting it as a part of the library.
