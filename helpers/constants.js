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
            200000000, // Initial Reward // 2 //   +6M  Year 2018
            20000000, // Mil 1 // 0.20 //    600k Year 2019
            15000000, // Mil 2 // 0.15 //   450k STH Year 2020
            0,  // Mil 3 // 0 //   0 STH Year 2021
            0,  // Mil 4 // 0 //   0 STH Year 2022
            0   // Mil 5 // 0 //   0 STH Year 2023
        ],
        offset: 75600, // Start rewards, 7 days after net start
        distance: 3000000, // Distance between milestone
    },
    signatureLength: 196,
    totalAmount: 24000000000000000,
    unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
