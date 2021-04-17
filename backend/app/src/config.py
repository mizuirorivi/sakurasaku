class Config(object):
    DEBUG = False
    TESTING = False
    port = "8888"
    host = "127.0.0.1"
    arch = ""
    def __init__(self,arg):
        self.arch = arg


