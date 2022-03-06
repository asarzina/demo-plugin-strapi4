module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88516a62e29ffa42cc56acea7af0ee7b'),
  },
});
