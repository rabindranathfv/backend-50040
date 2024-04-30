FROM node:16-alpine

# creando directorio para neustra api
RUN mkdir -p /usr/src/app

# directorio de trabajo
WORKDIR /usr/src/app

# copia el package.json y el package-log.json
COPY package*.json ./

# copiando todos los archivos de nuestra API al WORKDIR
COPY . .

RUN npm install

# configurar env
ENV NODE_ENV=development

# EXPOSE 5000

CMD ["npm", "run", "start:dev"]