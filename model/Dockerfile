FROM python:3.6

ENV HOME /home
WORKDIR $HOME/model
COPY .vimrc $HOME/
COPY requirements.txt $HOME/model/

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
        git \
        vim

RUN pip install --upgrade pip \
    && pip install -r $HOME/model/requirements.txt