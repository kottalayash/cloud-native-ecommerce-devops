FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY server.js test.js ./
RUN chown -R node:node /app
USER node
EXPOSE 3002
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost:3002/health || exit 1
CMD ["node", "server.js"]
