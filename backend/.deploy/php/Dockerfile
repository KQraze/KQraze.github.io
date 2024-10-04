FROM php:8.0-fpm-alpine

ARG USER

WORKDIR /project

RUN apk update && apk add \
    build-base \
    nano \
    bash \
    curl

RUN curl -sSLf \
            -o /usr/local/bin/install-php-extensions \
            https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions

RUN chmod +x /usr/local/bin/install-php-extensions
RUN install-php-extensions \
    pdo \
    pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY ../.deploy/php/php.ini /usr/local/etc/php/conf.d/40-custom.ini

RUN rm -rf /var/cache/apk/* && docker-php-source delete

RUN addgroup -g 1000 -S $USER && \
    adduser -u 1000 -S $USER -G $USER

COPY --chown=$USER:$USER ./source /project

USER $USER

EXPOSE 9000