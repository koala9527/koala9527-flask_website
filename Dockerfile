FROM python:3.6.8-slim-stretch
ENV LANG en_US.UTF-8 LC_ALL=en_US.UTF-8
COPY . /home
RUN cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && cd /home \
  && python3 -m pip install --trusted-host mirrors.aliyun.com --no-cache-dir -i http://mirrors.aliyun.com/pypi/simple -r /home/requirements.txt \
  && rm -rf /var/cache/* \
  && rm -rf /tmp/*
ENV PYTHONIOENCODING=utf-8
WORKDIR /home/code/label_recongnize/service
ENTRYPOINT ["python3","/home/app.py","&"]
