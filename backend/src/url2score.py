import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
def url2score(product_id):
    print("url2score's url = " + str(product_id))
    res = "" 
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome('/home/mizuiro/TOOLS/chromedriver',chrome_options=options)  # Optional argument, if not specified will search path.
    driver.get('https://sakura-checker.jp/search/' + str(product_id) + '/')
    for g_h3 in driver.find_elements_by_css_selector("#pagetop > div > div > div.mainArea > section.mainBlock > div.item-review-wrap > div:nth-child(2) > div > div:nth-child(1) > p:nth-child(2) > span"):
        print(g_h3.text)
        res = g_h3.text
    driver.quit()
    return res




