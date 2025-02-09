module.exports = {
  apps: [
    {
      name: "dogewhistle",
      exec_mode: "cluster",
      instances: 1,
      script: "pnpm",
      args: "start",
      env_local: {
        APP_ENV: "local",
        PORT: 3005,
      },
      env_dev: {
        APP_ENV: "dev",
        PORT: 3005,
      },
      env_prod: {
        APP_ENV: "prod",
        PORT: 3005,
      },
    },
  ],
};
