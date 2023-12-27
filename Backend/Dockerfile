FROM node:18

WORKDIR /myapp
COPY package.json .
RUN npm install

EXPOSE 3001

COPY . .
CMD npm start