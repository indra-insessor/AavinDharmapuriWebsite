module.exports = {
  apps: [
    {
      name: 'Aavin-Dharmapuri-Website',
      script: 'npm',
      args: 'start',
      cwd: '/home/ec2-user/var/www/prod/AavinDharmapuriWebsite',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};