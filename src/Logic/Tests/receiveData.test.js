import receiveData from '../receiveData'

describe('Receives Weather Data Properly', () => {
    it('Gets Data and returns a value', () => {
        expect(receiveData('Toronto')).toBeTruthy()
    })
    it('returns bah if the value is not a proper city', () => {
        expect(receiveData('123')).toBe('bah')
    })
})