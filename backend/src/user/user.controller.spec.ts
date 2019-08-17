import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

describe('User Controller', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        }).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    describe('getAlluser', () => {
        it('should return an array of all user', async () => {
            const user: User[] = [
                {
                    username: 'Tomasz',
                    email: 'tomasz@gmail.com',
                    password: 'pass',
                },
            ];

            jest.spyOn(userService, 'getAllUsers').mockImplementation(() =>
                Promise.resolve(user),
            );

            expect(await userController.getAllUsers()).toBe(user);
        });
    });

    describe('createUser', () => {
        it('should return created user', async () => {
            const user: User = {
                username: 'Sebastiabn Mazur',
                email: 'seba@wp.pl',
                password: 'Pass11',
            };
            jest.spyOn(userService, 'createUser').mockImplementation(() =>
                Promise.resolve(user),
            );

            expect(await userController.createUser(user)).toBe(user);
        });
    });
});
