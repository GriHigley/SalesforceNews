@IsTest
public with sharing class OksurfApiTest {
    
    @IsTest
    public static void GetNewsFeedTest(){
        Test.setMock(HttpCalloutMock.class, new OksurfApiGetFeedMock());
        Test.startTest();
        String resp = OksurfApi.getNewsFeed();
        Test.stopTest();
        System.assert(resp <> null);
    }
}
