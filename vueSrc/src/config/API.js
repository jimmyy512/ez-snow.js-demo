var hostname;
//手機cordova API
var CordovaAPI="http://172.16.82.102:1080/";
//手機ＡＰＫ下載地址
var APKurl='http://172.16.82.102:1088/android/lottery.apk';

if (process.env.NODE_ENV === "production") {
    hostname = process.env.BUILD_MODE=="Cordova"?CordovaAPI:'/';
}
else
{//development
    hostname = "/data/";
}
const userAuth=hostname+"user/auth";
const lotteryInit = hostname+ "lottery/init";
const LoginAPI = hostname+"user/login";
const LogoutAPI = hostname + "user/logout";
const BalanceAPI = hostname + "user/balance";
const BetAPI = hostname + "lottery/bet";
const lottery_History_issue=hostname+"lottery/historyIssue";
const lottery_historyRecord=hostname+"lottery/historyRecord";
const mBet_log=hostname+"api/get_recent_record_list_by_page";

export default{
    userAuth,
    LogoutAPI,
    LoginAPI,
    BalanceAPI,
    BetAPI,
    lottery_History_issue,
    lotteryInit,
    lottery_historyRecord,
    mBet_log,
    APKurl,
}