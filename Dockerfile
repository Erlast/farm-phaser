FROM node:20-alpine

WORKDIR /app

RUN ls

COPY package*.json ./

RUN npm install

# Тут мы НЕ копируем исходники (они монтируются через volume)

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]