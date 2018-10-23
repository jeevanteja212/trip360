import { ResetPasswordModule } from './reset-password.module';

describe('ResetPasswordModule', () => {
    let ResetPasswordModule: ResetPasswordModule;

    beforeEach(() => {
        ResetPasswordModule = new ResetPasswordModule();
    });

    it('should create an instance', () => {
        expect(ResetPasswordModule).toBeTruthy();
    });
});
