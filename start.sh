#!/bin/sh
set -ex  # Exit on error and print all commands

echo "========================================="
echo "🔄 Running database migrations..."
echo "========================================="
pnpm exec prisma migrate deploy

echo "========================================="
echo "✅ Migrations complete!"
echo "🚀 Starting NestJS application on PORT: ${PORT:-4201}"
echo "========================================="

# Start the application
exec node dist/src/main.js
