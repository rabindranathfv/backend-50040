ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine3.18

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev


# Expose the port that the application listens on.
EXPOSE 6000

# Run the application.
# CMD ["npm", "run", "start:prod"] alternativa para el CMD
CMD npm run start:prod
