const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found');
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'q8oe2b',
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || ''
      return getConfigurationByFile(file);
    },
    baseUrl: 'http://automationpractice.pl/index.php',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    includeShadowDom: true,
    chromeWebSecurity: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    screenshots: false,
    video: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 2,
      openMode: 0,
    }
  }
})