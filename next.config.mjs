/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações para Vercel
  reactStrictMode: true,
  
  // Configuração para garantir que o build funcione corretamente
  swcMinify: true,
};

export default nextConfig;
