FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy server and public files
COPY server.js ./
COPY logParser.js ./
COPY public ./public

ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]