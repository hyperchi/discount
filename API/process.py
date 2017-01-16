import requests
import datetime as dt
import urllib
import hmac
import hashlib
import base64
import pdb

import xmltodict
def compose_link(item_id="0679722769"):
    current_time = urllib.quote(dt.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"))
    query = "AWSAccessKeyId=AKIAJYIMWZ42Y4PHDTJQ&AssociateTag=hyperbolechi-20&ItemId=" + item_id + "&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews&Service=AWSECommerceService&Timestamp="+current_time+ "&Version=2013-08-01"
    string = "\n".join(["GET", "webservices.amazon.com", "/onca/xml", query])
    new_signature = base64.b64encode(hmac.new("pGCKw2XnmuQH0Vj5i4LBiC0oSoX5b7uV3lLmT6Dj", msg=string, digestmod=hashlib.sha256).digest())
    new_signature = urllib.quote(new_signature)
    query = "".join([query, "&Signature=", new_signature])
    return "".join(["http://webservices.amazon.com/onca/xml?", query])


def get_images(signed_link):
    response = requests.get(url=signed_link)
    json_file = xmltodict.parse(response.content)
    pass

#signed_link = compose_link()
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
    result = {'urls': []}
    for key in item:
        if key == "ItemLinks":
            for item_link in item[key]["ItemLink"]:
                result['urls'].append(item_link["URL"])
        #if key == "LargeImage":
        #    result.setdefault("image", item["LargeImage"]["URL"])
    print result
    #pdb.set_trace()
    return result


def process_result():
    signed_link = compose_link()
    print signed_link
    return get_urls(signed_link=signed_link)


def item_search(key_word):
    current_time = urllib.quote(dt.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"))
    query = "AWSAccessKeyId=AKIAJYIMWZ42Y4PHDTJQ&AssociateTag=hyperbolechi-20&ItemId=" + key_word + "&Operation=ItemLookup&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews&Service=AWSECommerceService&Timestamp="+current_time+ "&Version=2013-08-01"


def main():
    print(process_result())

if __name__ == "__main__":
    main()