FROM nginx:latest

# move build assets
COPY build /maizuo

COPY configs/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD nginx
