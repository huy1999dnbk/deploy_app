/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'http://localhost:8080/:path*' // Proxy to Backend
            }
        ]
    }
}

module.exports = nextConfig
