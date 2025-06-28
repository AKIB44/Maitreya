# Dockerfile

# ----------- Stage 1: Build App ------------
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build
