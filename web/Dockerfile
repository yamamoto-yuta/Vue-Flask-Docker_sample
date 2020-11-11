FROM node:13.7.0

ENV HOME /home
WORKDIR $HOME/web
COPY .vimrc $HOME/

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
        git \
        vim

RUN yarn global add @vue/cli && yarn global add @vue/cli-init