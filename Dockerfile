FROM node:9-slim
WORKDIR /home
COPY package.json /home
RUN npm install
EXPOSE 3000
COPY . /home
CMD ["npm","start"]