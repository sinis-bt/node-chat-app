const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
    var users;

    beforeEach (() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'node course'
        },,{
            id: '2',
            name: 'jen',
            room: 'react course'
        },{
            id: '3',
            name: 'Julie',
            room: 'node course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'MOjajaolds',
            room: 'The office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);


    });


    it('should remove user', () => {
        var userId = '2';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(4);

    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '26';
        var user = users.getUser(userId);
        expect(user).toBeUndefined();

    });




    it('should return names for node course', () => {
        var userList = users.getUserList('node course');

        expect(userList).toEqual(['Mike','Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('react course');

        expect(userList).toEqual(['jen']);
    });



});

