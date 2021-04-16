FROM python 
# 環境変数設定
ENV PYTHONIOENCODING utf-8
ENV TZ='Asia/Tokyo'
ENV DEBIAN_FRONTEND=noninteractive

# 作業ディレクトリ作成
WORKDIR /app


# パッケージの更新確認
RUN apt-get -y update

#apt update
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y libgbm1 libappindicator3-1 libappindicator1 fonts-liberation libasound2 libnspr4 libnss3 libxss1 lsb-release xdg-utils libfontconfig
# requirement.txtのコピー作成
ADD requirements.txt /app/ 

COPY . .
#必要なライブラリのインストール
RUN pip3 install -r requirements.txt

# chronium-driver install
RUN apt-get install chromium -y
RUN file src/run.py
EXPOSE 8080
# コンテナ起動時に実行するコマンドを設定
CMD [ "python3", "src/run.py" ]
