import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
def url2score(url):
    res:string = ""
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome('/home/mizuiro/PROJECTS/tools/chromedriver',chrome_options=options)  # Optional argument, if not specified will search path.
    driver.get('https://sakura-checker.jp/search/B082M5XW63/')
    for g_h3 in driver.find_elements_by_css_selector("#pagetop > div > div > div.mainArea > section.mainBlock > div.item-review-wrap > div:nth-child(2) > div > div:nth-child(1) > p:nth-child(2) > span"):
        print(g_h3.text)
        res = g_h3.text
    time.sleep(5) # Let the user actually see something!
    driver.quit()
    return res




