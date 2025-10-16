/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Empêche l'échec du build si ESLint n'est pas configuré/installé
    ignoreDuringBuilds: true,
  },
  // Optionnel : si tu as des erreurs TypeScript bloquantes et veux avancer :
  // typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;

