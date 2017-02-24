
/////////////////////////Leave
{
    "id": "e5186467-deda-4312-b0b4-618ff105221a",
    "timestamp": "2017-02-03T09:21:13.043Z",
    "result": {
        "source": "agent",
        "resolvedQuery": "next friday",
        "action": "",
        "actionIncomplete": false,
        "parameters": {
        "date": [
            "2017-02-10"
        ],
        "leaveType": [
            "sick leave"
        ]
        },
        "contexts": [],
        "metadata": {
        "intentId": "38973a42-acfb-4441-b522-f509779471d6",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Leave Request"
        },
        "fulfillment": {
        "speech": "Ok , I will send email to you manger",
        "messages": [
            {
            "type": 0,
            "speech": "Ok , I will send email to you manger"
            },
            {
            "title": "Yes, No",
            "replies": [],
            "type": 2
            }
        ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "718bdaa3-0247-44e2-8181-bf9faf268055"
}


/////////////////////////Travel
{
    "id": "89d5aa8d-62b1-4c21-8aeb-734b59e4ac63",
    "timestamp": "2017-02-03T15:14:16.851Z",
    "result": {
    "source": "agent",
    "resolvedQuery": "feb 23",
    "action": "",
    "actionIncomplete": false,
    "parameters": {
        "date": "2017-02-23",
        "geo-city": "Mumbai",
        "travel-options": "bus"
    },
    "contexts": [],
    "metadata": {
        "intentId": "fe39ae8d-b1b1-44f7-ab99-6243a132693b",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Travel Request"
    },
    "fulfillment": {
        "speech": "Travel admin will book your ticket based on the availability and contact you",
        "messages": [
            {
                "type": 0,
                "speech": "Travel admin will book your ticket based on the availability and contact you"
            }
        ]
    },
    "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "718bdaa3-0247-44e2-8181-bf9faf268055"
}

////////Error
{
  "id": "5dd15167-81fc-41f2-958f-9e7a2a4f499d",
  "timestamp": "2017-02-03T11:19:24.689Z",
  "result": {
    "source": "domains",
    "resolvedQuery": "hi",
    "action": "smalltalk.greetings",
    "parameters": {
      "simplified": "hello"
    },
    "metadata": {},
    "fulfillment": {
      "speech": "Hey!"
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "718bdaa3-0247-44e2-8181-bf9faf268055"
}