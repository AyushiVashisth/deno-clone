/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['merch-clone.s3.ap-south-1.amazonaws.com']
    // remotePatterns:[
    //   {
    //     protocol:"https",
    //     hostname:'merch-clone.s3.ap-south-1.amazonaws.com',
    //     port:"",
    //     pathname:"**"

    //   }, 
    // ],
  }
}

module.exports = nextConfig
