var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "170",
        "ok": "-",
        "ko": "170"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "35",
        "ok": "-",
        "ko": "35"
    },
    "percentiles1": {
        "total": "68",
        "ok": "-",
        "ko": "68"
    },
    "percentiles2": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "percentiles3": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "percentiles4": {
        "total": "165",
        "ok": "-",
        "ko": "165"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.012",
        "ok": "-",
        "ko": "0.012"
    }
},
contents: {
"req_create-owner-76b2a": {
        type: "REQUEST",
        name: "Create Owner",
path: "Create Owner",
pathFormatted: "req_create-owner-76b2a",
stats: {
    "name": "Create Owner",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "170",
        "ok": "-",
        "ko": "170"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "-",
        "ko": "80"
    },
    "standardDeviation": {
        "total": "35",
        "ok": "-",
        "ko": "35"
    },
    "percentiles1": {
        "total": "68",
        "ok": "-",
        "ko": "68"
    },
    "percentiles2": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "percentiles3": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "percentiles4": {
        "total": "165",
        "ok": "-",
        "ko": "165"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.012",
        "ok": "-",
        "ko": "0.012"
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
