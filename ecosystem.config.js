module.exports = {
  apps: [{
    name: 'mycloudserver',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-190-28-227.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/home.pem',
      ref: 'origin/master',
      repo: 'git@github.com:emilydaitch/myCloudServer.git',
      path: '~/code/myCloudServer',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}