FROM ruby:2.7.1

MAINTAINER Maxim Zelenkin <nudepatch@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt update -q && apt install -y \
    build-essential \
    libpq-dev \
    nodejs \
    nano \
    yarn > /dev/null

ENV APP_PATH /app
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

ENV BUNDLE_PATH /bundle
ENV GEM_HOME /bundle
ENV PATH="/bundle/bin:${PATH}"

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
