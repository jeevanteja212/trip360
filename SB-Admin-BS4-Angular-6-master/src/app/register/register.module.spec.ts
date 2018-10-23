import { RegisterModule } from './register.module';

describe('RegisterModule', () => {
    let RegisterModule: RegisterModule;

    beforeEach(() => {
        RegisterModule = new RegisterModule();
    });

    it('should create an instance', () => {
        expect(RegisterModule).toBeTruthy();
    });
});
