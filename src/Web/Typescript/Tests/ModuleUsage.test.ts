import {ModuleUsage} from "../App/ModuleUsage";

describe('ModuleUsage', () => {

    test('IsNullOrEmpty empty string return true', () => {

        //Arrange
        let value: string = "";

        //Act
        let result = ModuleUsage.Str.IsNullOrEmpty(value);

        //Assert
        expect(result).toBeTruthy();
    });

});