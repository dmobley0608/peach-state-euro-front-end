FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build --production

CMD ["npx", "serve", "-s", "build"]