FROM python:3.6

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV FLASK_APP app.py
ENV FLASK_ENV development

RUN set -x
RUN apt-get -y update
RUN apt-get install -y libffi-dev python3-dev libssl-dev
RUN apt-get -y clean

USER root

WORKDIR /app
ADD . /app

RUN /usr/local/bin/python -m pip install --upgrade pip
RUN /usr/local/bin/python -m pip install --trusted-host pypi.python.org -r requirements.txt

ENTRYPOINT flask run