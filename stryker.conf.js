module.exports = {
    "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
    "mutator": {
      "plugins": []
    },
    "mutate": [
      "src/**/*.js",
      "src/**/*.vue",
      "!src/router/index.js",
      "!src/main.js"
    ],
    "tempDirName_comment": "Jest doesn't play nice with the default (.stryker-tmp).",
    "tempDirName": "stryker-tmp",
    "testRunner": "jest",
    "coverageAnalysis": "off"
  }