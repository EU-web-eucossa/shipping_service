FROM node:16-alpine3.11


RUN  mkdir -p /Shipping/app

WORKDIR /Shipping/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm","start"]