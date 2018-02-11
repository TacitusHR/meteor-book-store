FROM node:8.9.4

# Install ps command
RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    locales \
    procps \
    ca-certificates \
    bzip2 \
    libfontconfig \
    git && \
  apt-get remove -y man && \
  rm -rf /var/lib/apt/lists/*

RUN set -x  \
  && mkdir /tmp/phantomjs \
  && curl -L https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 \
        | tar -xj --strip-components=1 -C /tmp/phantomjs \
  && mv /tmp/phantomjs/bin/phantomjs /usr/local/bin \
  && apt-get clean \
  && rm -rf /tmp/* /var/lib/apt/lists/*

RUN localedef -i en_US -f UTF-8 en_US.UTF-8

RUN groupadd -r meteor && useradd -ms /bin/bash -g meteor meteor
USER meteor
WORKDIR /home/meteor

RUN curl https://install.meteor.com/ | sh

RUN mkdir /home/meteor/app
WORKDIR /home/meteor/app

ENV HOME /home/meteor
ENV PATH $HOME/.meteor:$PATH

EXPOSE 3000
EXPOSE 4000

CMD ["meteor","npm","start"]
