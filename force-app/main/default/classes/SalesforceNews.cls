global  with sharing class SalesforceNews {
    public SalesforceNews() {}
    @RemoteAction
    global  static String GetNewsFeed(){
        try {
            return OksurfApi.getNewsFeed();
        } 
        catch (OksurfApi.OksurfApiException oksurfApiException) {
            throw new AuraHandledException(oksurfApiException.getMessage());
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        } 
    }
}