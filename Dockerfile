# Dockerfile (tag: v3)
FROM node
WORKDIR /usr/app/
COPY . /usr/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
