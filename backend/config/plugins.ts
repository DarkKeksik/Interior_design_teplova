import crypto from 'crypto';

export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('STRAPI_JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
            jwt: {
                expiresIn: '7d',
            },
        },
    },
});