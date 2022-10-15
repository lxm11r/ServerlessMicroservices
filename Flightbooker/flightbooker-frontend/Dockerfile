FROM node:16.10.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
