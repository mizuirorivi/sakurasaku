import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import chromedriver_binary
def url2score(product_id):
    print("url2score's url = " + str(product_id))
    res = ""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")  # ヘッドレスで起動
    options.add_argument('--no-sandbox') # 仮想環境下では、sandboxで起動すると失敗するので無効にする
    options.add_argument('--disable-gpu') # ヘッドレスモードで起動するときに必要
    options.add_argument('--window-size=1280,1024')  # 画面サイズの指定
    # chromeドライバーを起動
    driver = webdriver.Chrome(options=options)
    driver.get('https://sakura-checker.jp/search/' + str(product_id) + '/')
    for g_h3 in driver.find_elements_by_css_selector("#pagetop > div > div > div.mainArea > section.mainBlock > div.item-review-wrap > div:nth-child(2) > div > div:nth-child(1) > p:nth-child(2) > span"):
        print(g_h3.text)
        res = g_h3.text
    time.sleep(3)
    driver.quit()
    return res




