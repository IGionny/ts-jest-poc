import * as ngs from '../src'

describe('ModuleUsage', () => {
  test('IsNullOrEmpty empty string return true', () => {
    //Arrange
    let value: string = ''

    //Act
    let result = ngs.str.isNullOrEmpty(value)

    //Assert
    expect(result).toBeTruthy()
  })
})
