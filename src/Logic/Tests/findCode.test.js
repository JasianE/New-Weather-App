import findCode from '../findCode'

describe('Returns correct code given every corner case aka atmosphere stuff', () => {
    it('Returns the correct code when weather is sunny', () => {
        expect(findCode('Clear')).toBe('01d')
    })
    it('Returns atmosphere code for everything else (openweathermap has like 12 different weather types each with the atmosphere icon)', () => {
        expect(findCode('Mist')).toBe('50d')
    })
})