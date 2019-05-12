FROM oraclelinux:7-slim
WORKDIR /app
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -
RUN yum -y install nodejs npm --skip-broken
ADD hello.js .
EXPOSE 80
ADD package.json .
CMD ["node","hello.js"]

# docker build -t javiermugueta/okegke .
# docker push javiermugueta/okegke
