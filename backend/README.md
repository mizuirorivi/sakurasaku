# Docker

## 環境構築
```
docker-compose build
docker-compose up -d
```
起動しているかどうかはhttp://localhost:8080/でhelloが出力されているかの確認ができればok

# non Docker

[chromedriver](https://chromedriver.storage.googleapis.com/index.html?path=89.0.4389.23/)を```backend/src```の中に配置する

# python

## url2scoreAPIの挙動
localhost:8080/api/url2score?url=<amazon_url>

## version
python3:latest
antiorm==1.2.1
astroid==2.5.3
click==7.1.2
db==0.1.1
Flask==1.1.2
isort==5.8.0
itsdangerous==1.1.0
Jinja2==2.11.3
lazy-object-proxy==1.6.0
MarkupSafe==1.1.1
mccabe==0.6.1
pylint==2.7.4
selenium==3.141.0
toml==0.10.2
urllib3==1.26.4
Werkzeug==1.0.1
wrapt==1.12.1
chromedriver-binary==89.0.4389.23.0
