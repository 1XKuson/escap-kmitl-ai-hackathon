# --- Stage 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Serve (The Ultra-Light Part) ---
FROM nginx:alpine

# Copy the static files from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Fix permissions to prevent 403 Forbidden
RUN chmod -R 755 /usr/share/nginx/html

# Create a custom Nginx config to handle Next.js static routing
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    error_page 404 /404.html;\n\
\n\
    # Strip trailing slashes to match Next.js default output (.html)\n\
    rewrite ^/(.+)/$ /$1 permanent;\n\
\n\
    location / {\n\
        try_files $uri $uri.html $uri/ =404;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]