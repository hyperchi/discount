import requests
import datetime as dt
import urllib
import hmac
import hashlib
import base64

import xmltodict
def compose_link():
    current_time = urllib.quote(dt.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"))
    query = "AWSAccessKeyId=AKIAJYIMWZ42Y4PHDTJQ&AssociateTag=hyperbolechi-20&ItemId=0679722769&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews&Service=AWSECommerceService&Timestamp="+current_time+ "&Version=2013-08-01"
    string = "\n".join(["GET", "webservices.amazon.com", "/onca/xml", query])
    new_signature = base64.b64encode(hmac.new("pGCKw2XnmuQH0Vj5i4LBiC0oSoX5b7uV3lLmT6Dj", msg=string, digestmod=hashlib.sha256).digest())
    new_signature = urllib.quote(new_signature)
    query = "".join([query, "&Signature=", new_signature])
    return "".join(["http://webservices.amazon.com/onca/xml?", query])


def get_images():
    pass

signed_link = compose_link()
# print url
# response = requests.get(url=url)
#
# json_file = xmltodict.parse(response.content)
#
# item = json_file["ItemLookupResponse"]["Items"]["Item"]
# #
# for key in item:
#     if key == "ItemLinks":
#         for item_link in item[key]["ItemLink"]:
#             print item_link["URL"]


def get_urls(signed_link):
    response = requests.get(url=signed_link)
    json_file = xmltodict.parse(response.content)
    item = json_file["ItemLookupResponse"]["Items"]["Item"]
    result = []
    for key in item:
        if key == "ItemLinks":
            for item_link in item[key]["ItemLink"]:
                result.append(item_link["URL"])
    return result


def process_result():
    signed_link = compose_link()
    return get_urls(signed_link=signed_link)