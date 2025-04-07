# Базовый образ с node
FROM node:20-alpine

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Открываем порт для Vite dev server
EXPOSE 5173

# Запуск dev-сервера
CMD ["npm", "run", "dev", "--", "--host"]