jest.mock('../src/client/js/fetchGeoData.js')
const { parseGeoData } = require('../src/client/js/parseGeoData')

test('Check if fetchGeoData city and country match', () => {
    return parseGeoData().then(text => {
        return expect(text).toStrictEqual({
            "city":"Gondor",
            "country": "Middle Earth"
        })
    })
})