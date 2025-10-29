FROM nginx:latest

COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/

COPY src/ /usr/share/nginx/html
