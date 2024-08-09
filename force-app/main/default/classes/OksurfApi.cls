public with sharing class OksurfApi {
    public virtual  class OksurfApiException extends Exception{}

    public static String getNewsFeed(){
        try {
            String url = 'https://ok.surf/api/v1/news-feed';
            HttpRequest req = new HttpRequest();
            req.setEndpoint(url);
            req.setMethod('GET');
            Http http = new Http();
            HTTPResponse res = http.send(req);
            String resp = res.getBody().escapeHtml4().unescapeHtml4();
            System.debug('Resp ' + resp);
            System.debug(resp);
            return resp;
        } catch (Exception e) {
            throw new OksurfApiException(e.getMessage());  
        }
    }
   
    System.debug(OksurfApi.getNewsFeed());
}
