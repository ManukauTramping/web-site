module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Makefolio","short_name":"Makefolio","start_url":"/","background_color":"#2980b9","theme_color":"#2980b9","display":"standalone","icon":"src/images/gatsby-icon.png","orientation":"portrait"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-XXXXXXXX-X","anonymize":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
