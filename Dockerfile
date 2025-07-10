FROM node:20-alpine

WORKDIR /app

COPY package*.json ./


# Clean npm cache & remove unnecessary files (if they exist)
RUN npm cache clean --force && \
    rm -rf node_modules package-lock.json && \
    npm install

COPY . .

# 🏗️ Step 6: Build the app
RUN npm run build
