'use strict';

module.exports = {
    activeDelegates: 64,
    maximumVotes: 1,
    maximumVotesPatch: 1,
    addressLength: 208,
    blockHeaderLength: 248,
    confirmationLength: 77,
    epochTime: new Date(Date.UTC(2017, 10, 21, 13, 0, 0, 0)),
    fees: {
        send: 10000000,
        vote: 100000000,
        secondsignature: 500000000,
        delegate: 5500000000,
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
    rewards: {
        milestones: [
            200000000, // Initial Reward // 2 //   6 000 000
            20000000 // Milestone 1 // 0.2 //     600 000
            // 1000000, // Milestone 2 // 0.01 //     30 000
            // 100000, // Milestone 3 //  0.001 //    3 000
            // 10000  // Milestone 4 //  0.0001 //    3 00
        ],
        offset: 75600,  // 75600 main Start rewards at block, ie 7 days after net start
        distance: 826000 // Distance between each milestone // main 3000000 // 826000 dev
    },
    signatureLength: 196,
    totalAmount: 24000000000000000,
    unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
