FROM node:alpine as buildstage
WORKDIR /app
COPY . /app
RUN npm install 
RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=stage ./public/ /var/share/www
COPY nginx.conf /etc/nginx/conf
EXPOSE 80
CMD [ "nginx", "-g", "deamon off;" ]
