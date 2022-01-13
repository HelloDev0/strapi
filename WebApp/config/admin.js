module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b24fd07f56b8689e96e80c507352fa8'),
  },
});
