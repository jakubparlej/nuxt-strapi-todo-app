module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c9f38f0326d061d9f4368a45bcc6d5ee'),
  },
});
