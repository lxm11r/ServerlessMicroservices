FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH PATH /app/node_modules/.vite/deps:$PATH
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
