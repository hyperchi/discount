import requests
import datetime as dt
import urllib
import hmac
import hashlib
import base64
import pdb

# user defined packages

from search_requests import SearchRequests


class SearchResponds(object):
    """
    This is search responds
    """
    def __init__(self):
        self.class_name = "SearchRespond"