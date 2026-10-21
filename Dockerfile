FROM node:20-alpine

# Fixed legacy warning: Use '=' for ENV variables
ENV WORKDIR=/app

# Install git so Docker can clone the repo
RUN apk add --no-cache git

# Install pnpm globally so the install step works
RUN npm install -g pnpm

WORKDIR $WORKDIR

# Clone the repository directly into the current directory (.)
RUN git clone https://github.com/shevabam/breaking-bad-quotes.git .

RUN pnpm install

EXPOSE 3001
CMD [ "pnpm", "start" ]
