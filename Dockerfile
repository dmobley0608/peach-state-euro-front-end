FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --production

CMD ["npx", "serve", "-s", "build"]