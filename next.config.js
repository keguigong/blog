const path = require("path")
const customizeNextConfig = require("./customize-next-config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  // Read more: https://nextjs.org/docs/messages/export-image-api
  images: {
    unoptimized: true
  },
  // Read more: https://nextjs.org/docs/basic-features/built-in-css-support#customizing-sass-options
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  // Read more: https://nextjs.org/docs/advanced-features/compiler#styled-components
  compiler: {
    styledComponents: {
      ssr: true
    }
  }
}

customizeNextConfig(nextConfig)

// Merge MDX config with Next.js config
module.exports = nextConfig
