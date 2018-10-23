import { autofillFlightModule } from './autofillFlight.module';

describe('LoginModule', () => {
    let loginModule: autofillFlightModule;

    beforeEach(() => {
        loginModule = new autofillFlightModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
