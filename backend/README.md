## バックエンド環境の構築
1. requirement.txtに書いてある起動に必要なパッケージをpipでインストール
2. chromedriverをインストールして、src/url2score.pyの中の webdriver.Chrome('<my_chrome_drive_path>',chromeoptions=options)で自分のクロームドライバーのパスを指定 
3. python3 run.pyで起動

## url2scoreAPIの挙動
localhost:8080/api/url2score?url=<amazon_url>
