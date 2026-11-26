//import module traffic light
const app = require("./trafficlight"); //??

//test suite
describe('test suite traffic light', () => { //??
    //case red light
    it(`case red light`, () => { //??
        expect(app.trafficLight("red"))//??
            .toBe("DON'T WALK!");//??
    });//??

    //case green light
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });

    //case orange light
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });

    //case out of order (no argument)
    it(`case out of order`, () => {
        expect(app.trafficLight(undefined))
            .toBe("OUT OF ORDER");
    });

    //case unknown color
    it(`case unknown color`, () => {
        expect(app.trafficLight("blue"))
            .toBeUndefined();
    });
});//??
