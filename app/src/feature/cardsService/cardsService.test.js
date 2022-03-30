import { testUseAppSelector } from '../test-app-selector';
import { useAppSelector } from '../redux-hooks';
import reducer from './cardsService';

jest.mock('../redux-hooks');


describe('Testing Cards Reducers initial State', () => {
    beforeEach(() => {
        useAppSelector.mockImplementation(testUseAppSelector);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                cards: [],
                status:null
            }
        )
    })
})
    

