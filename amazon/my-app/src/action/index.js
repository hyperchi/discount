import Request from 'superagent'

// request to call api for search
export function getSearchResultRequest(key_words) {
    // let url =  "http://localhost:12345/amazon_api";
    let url =  "http://ec2-54-200-195-246.us-west-2.compute.amazonaws.com:12345/amazon_api";
            console.error(url);
    Request.get(url)
        .query({"optional1":key_words})
        .then((response) => {
            console.error(response);
            return JSON.parse(response.text).values;
        });
}
