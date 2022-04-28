import { login } from "@/api/auth";


describe('testing auth api', () => {
    describe('login method with using credentials', () => {
        test('', async () => {
            try {
                data = await login({ username: '+998903297989', password: 'asdASD123' });
                expect(data).toContainEqual({ username: '+998903297989' });
            } catch (e) {
                console.log(e);
            }
        })

    });
});