/* TS DOCUMENT */

'use strict';

import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    testTimeout: 30000,
    maxWorkers: 63,
    verbose: false,
    cache: true,
    roots: [
        './'
    ],
    testMatch: [
        '**/*.test.(js|jsx|ts|tsx)',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    },
};

export default config;
