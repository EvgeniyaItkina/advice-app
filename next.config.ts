import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Настройка для статического экспорта
  distDir: "dist",  // Папка для собранного проекта
};

export default nextConfig;

