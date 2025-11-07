var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4521",
        "ok": "4521",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9197",
        "ok": "9197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "426",
        "ok": "426",
        "ko": "-"
    },
    "percentiles1": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles2": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles3": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4454,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 50,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.512",
        "ok": "2.512",
        "ko": "-"
    }
},
contents: {
"req_fetch-all-owner-72adb": {
        type: "REQUEST",
        name: "Fetch All Owners",
path: "Fetch All Owners",
pathFormatted: "req_fetch-all-owner-72adb",
stats: {
    "name": "Fetch All Owners",
    "numberOfRequests": {
        "total": "4521",
        "ok": "4521",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9197",
        "ok": "9197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "426",
        "ok": "426",
        "ko": "-"
    },
    "percentiles1": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles2": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles3": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4454,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 50,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.512",
        "ok": "2.512",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
