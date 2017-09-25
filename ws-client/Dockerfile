FROM xqdocker/ubuntu-nginx

# Run updater
RUN apt-get update -y

# Copy nginx configuration files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy app
COPY build /data/www/

# open port
EXPOSE 8000