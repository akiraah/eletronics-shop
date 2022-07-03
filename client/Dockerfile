FROM node:17-alpine
ENV CI=true
ENV WDS_SOCKET_PORT=0
WORKDIR /app
COPY yarn.lock .
RUN yarn install
COPY . .

CMD ["yarn", "start"]