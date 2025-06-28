# Dockerfile

# # ----------- Stage 1: Build App ------------
# FROM node:18 AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install --force

# COPY . .
# RUN npm run build

# ----------- Stage 1: Build Vite React App ------------
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

# ----------- Stage 2: Serve with Nginx ------------
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Vite build output (dist folder)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

