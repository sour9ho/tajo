const addressPrefix = 'https://raw.githubusercontent.com/sour9ho/test-question/main/'

function getAddress(testName, date) {
    const testAddress = addressPrefix + testName + '/'
    return {
        infoAddress: testAddress + 'info.json',
        paperAddress: testAddress + 'question/' + date + '.json'
    }
}

export { getAddress }