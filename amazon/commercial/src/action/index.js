import Request from 'superagent'

// request to call api for search
export function getSearchResultRequest(key_words) {
    let url =  "http://localhost:12345/amazon_api";
    return Request.get(url)
        .query({"optional1":key_words})
        .then((response) => {
            return JSON.parse(response.res.text).values
        });
}
