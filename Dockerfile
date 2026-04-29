# ── Stage: Serve static build with Nginx ──
FROM nginx:stable-alpine

# Remove default Nginx configuration and static files
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy the production build into Nginx directory
COPY . /usr/share/nginx/html

# Create a clean and optimized Nginx configuration
RUN printf "server {\n\
    listen 3002;\n\
    server_name localhost;\n\
\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    # Gzip Compression\n\
    gzip on;\n\
    gzip_vary on;\n\
    gzip_proxied any;\n\
    gzip_comp_level 6;\n\
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;\n\
\n\
    # Cache static assets (Vite hashed files)\n\
    location /assets/ {\n\
        expires 1y;\n\
        add_header Cache-Control \"public, immutable\";\n\
    }\n\
\n\
    # Cache fonts\n\
    location /fonts/ {\n\
        expires 1y;\n\
        add_header Cache-Control \"public, immutable\";\n\
    }\n\
\n\
    # SPA Fallback: Route all non-file requests to index.html\n\
    location / {\n\
        try_files \$uri \$uri/ /index.html;\n\
    }\n\
\n\
    # Error handling\n\
    error_page 500 502 503 504 /50x.html;\n\
    location = /50x.html {\n\
        root /usr/share/nginx/html;\n\
    }\n\
}\n" > /etc/nginx/conf.d/default.conf

# Expose the custom port
EXPOSE 3002

# Standard start command
CMD ["nginx", "-g", "daemon off;"]
