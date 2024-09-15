/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            '@faker-js/faker',
        ]
    }
}

module.exports = nextConfig
