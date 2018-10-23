import { HomeModule } from './home.module';

describe('LoginModule', () => {
    let loginModule: HomeModule;

    beforeEach(() => {
        loginModule = new HomeModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
