# ── Stage: Serve static build with Nginx ──
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the production build into Nginx
COPY . /usr/share/nginx/html

# Custom Nginx config to serve on port 3002 with SPA fallback
RUN cat > /etc/nginx/conf.d/default.conf <<'EOF'
server {
    listen 3002;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Cache static assets aggressively
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache fonts
    location /fonts/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback – route all non-file requests to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

# Expose port 3002
EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]
