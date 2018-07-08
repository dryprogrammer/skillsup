module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '13.67.52.235',
      username: 'ubuntu',
      pem: '/Users/davidson1/.ssh/id_rsa'
    }
  },

  app: {
    // TODO: change app name and path
    name: 'skillsup_meteor',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      debug: true
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://app.skillsup.ml',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
    domains: 'skillsup.ml,www.skillsup.com,app.skillsup.ml',
    ssl: {
      forceSSL: true,
      // Enable Let's Encrypt
      letsEncryptEmail: 'project.skillsup@gmail.com'
    },
    shared: {
      httpsPort: 443,
      envLetsEncrypt: {
        DEBUG: true
      }
    }
  }
}
