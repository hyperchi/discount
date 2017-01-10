import tornado.ioloop
import tornado.web
import logging.config
from tornado.httpserver import HTTPServer
import argparse
import datetime as dt
import json

# user defined packages
import process


class Handler(tornado.web.RequestHandler):
    """
    rest service for web api service
    """
    def initialize(self):
        self.logger = logging.getLogger("api_logger")

    def get(self):
        """
        Returns
        -------
        """

        # get bucket name and data config file name from users
        optional1 = self.get_argument("optional1")
        print optional1
        result = {}
        values = process.process_result()
        result["values"] = values
        self.finish(json.dumps(result))


def main():
    """
    Main function for rest service
    Returns
    -------
    """
    print("Loading arguments...")
    parser = argparse.ArgumentParser("sAPI parser")
    parser.add_argument("-p", "--port", dest="port", help="which port to listen to", default=12345, type=int)

    args = parser.parse_args()

    app = tornado.web.Application([(r"/amazon_api", Handler, {})])
    server = HTTPServer(app)
    server.bind(args.port)
    server.start()
    print("Now taking requests...")
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    print("Starting service")
    main()