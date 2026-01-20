# ========================================
# Stage 1: Builder - Install dependencies and build
# ========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Copy Prisma schema FIRST (before install so postinstall can work)
COPY prisma ./prisma/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Generate Prisma Client explicitly (no postinstall anymore)
RUN pnpm exec prisma generate

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# ========================================
# Stage 2: Production - Run the app
# ========================================
FROM node:22-alpine AS production

WORKDIR /app

# Install pnpm and openssl
RUN apk add --no-cache openssl && corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Copy Prisma schema FIRST
COPY --from=builder /app/prisma ./prisma/

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Install Prisma CLI explicitly for migrations
RUN pnpm add -D prisma@5.22.0

# Generate Prisma Client for production (critical!)
RUN pnpm exec prisma generate

# Copy built application
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 4201

# Start the application
# Using sh -c to allow command chaining
CMD ["sh", "-c", "echo 'Starting deployment script...' && npx prisma migrate deploy && echo 'Migrations done, starting node...' && node dist/src/main.js"]
