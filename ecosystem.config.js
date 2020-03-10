module.exports = {
  apps: [
    {
      name: "tracau-frontend",
      script: "serve",
      exec_mode:"fork",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: "build -s",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3002,
        PM2_SERVE_PORT: 3002
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
        PM2_SERVE_PORT: 3002
      }
    }
  ],

  deploy: {
    production: {
      user: "root",
      host: "27.71.233.139",
      ref: "origin/develop",
      repo: "git@gitlab.com:deathteam/dictionary/devfast-frontend.git",
      path:
        "/root/deadthteam/projects/tracau/frontend/devfast-frontend/Front-end",
      "post-deploy":
        "git pull && npm install  && rm -rf build && npm run build && pm2 reload ecosystem.config.js --env production"
    }
  }
};
