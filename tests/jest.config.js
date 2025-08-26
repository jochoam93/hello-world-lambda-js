const config = {
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.js"],
    Transform: {
        "^.+\\.js$": "babel-jest"
    },
    verbose: true
};

module.exports = config;