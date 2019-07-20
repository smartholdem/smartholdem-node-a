'use strict';

module.exports = {
    activeDelegates: 64,
    maximumVotes: 1,
    addressLength: 208,
    blockHeaderLength: 248,
    confirmationLength: 77,
    epochTime: new Date(Date.UTC(2017, 10, 21, 13, 0, 0, 0)),
    fees: {
        send: 10000000,
        vote: 100000000,
        secondsignature: 500000000,
        delegate: 5500000000000,
        multisignature: 500000000
    },
    feeStart: 1,
    feeStartVolume: 10000 * 100000000,
    fixedPoint: Math.pow(10, 8),
    forgingTimeOut: 3840, // 128 blocks / 2 rounds
    maxAddressesLength: 208 * 128,
    maxAmount: 100000000,
    maxClientConnections: 100,
    maxConfirmations: 77 * 100,
    maxPayloadLength: 2 * 1024 * 1024,
    maxRequests: 10000 * 12,
    maxSignaturesLength: 196 * 256,
    maxTxsPerBlock: 50,
    blocktime: 8,
    numberLength: 100000000,
    requestLength: 104,
    maxTxsPerQueue: 1000,
    rewards: {
        milestones: [
            200000000, // Initial Reward        +6 000 000 STH   23 December 2017 20:27:36 - 05 October 2018 11:26:40
            20000000,  //  3 075 600 - 6 075 599  +600 000 STH   05 October 2018 11:27:04 - ~25 Jul 2019 16:53:36 GMT
            20000000,  //  6 075 600 - 9 075 599  +600 000 STH   ~28 April 2020, 11:33:36
            20000000,  //  9 075 600 - 12 075 599 +600 000 STH   ~31 January 2021, 6:13:36
            20000000,  // 12 075 600 - 15 075 599 +600 000 STH
            20000000,  // 15 075 600 - 18 075 599 +600 000 STH
            18000000,  // 18 075 600 - 21 075 599 +540 000 STH
            18000000,  // 18 075 600 - 24 075 599 +540 000 STH
            18000000,  // 24 075 600 - 27 075 599 +540 000 STH
            18000000,  // 27 075 600 - 30 075 599 +540 000 STH
            18000000,  // 30 075 600 - 33 075 599 +540 000 STH
            15000000,  // 33 075 600 - 36 075 599 +450 000 STH
            15000000,  // 36 075 600 - 39 075 599 +450 000 STH
            15000000,  // 39 075 600 - 42 075 599 +450 000 STH
            15000000,  // 42 075 600 - 45 075 599 +450 000 STH
            15000000,  // 45 075 600 - 48 075 599 +450 000 STH
            12000000,  // 48 075 600 - 51 075 599 +360 000 STH
            12000000,  // 51 075 600 - 54 075 599 +360 000 STH
            12000000,  // 54 075 600 - 57 075 599 +360 000 STH
            12000000,  // 57 075 600 - 60 075 599 +360 000 STH
            12000000,  // 60 075 600 - 63 075 599 +360 000 STH
            10000000,  // 63 075 600 - 66 075 599 +300 000 STH
            10000000,  // 66 075 600 - 69 075 599 +300 000 STH
            10000000,  // 69 075 600 - 72 075 599 +300 000 STH
            10000000,  // 72 075 600 - 75 075 599 +300 000 STH
            10000000,  // 75 075 600 - 78 075 599 +300 000 STH
            8000000,   // 78 075 600 - 81 075 599 +240 000 STH
            8000000,   // 81 075 600 - 84 075 599 +240 000 STH
            8000000,   // 84 075 600 - 87 075 599 +240 000 STH
            8000000,   // 87 075 600 - 90 075 599 +240 000 STH
            8000000,   // 90 075 600 - 93 075 599 +240 000 STH
            0          // 93 075 600 = 16 425 000 STH + 240 000 000 = 256 425 000 //~GMT: Wednesday, 14 August 2041, 6:13:36
        ],
        offset: 75600, // Start rewards, 7 days after net start
        distance: 3000000, // Distance between milestone // 277.7 days
    },
    signatureLength: 196,
    totalAmount: 24000000000000000,
    unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
