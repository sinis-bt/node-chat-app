const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe("generateMessage", () => {

        it('should generate corrrect message object', () => {
            var from = "jen";
            var text = "some message";
            var message = generateMessage(from, text);
            expect(typeof message.createdAt).toBe('number');
            expect(message).toMatchObject({from, text});
        });
});

describe("generateLocationMessage", () => {

    it('ishould generate corrrect location object', () => {
        var from = "Deb";
        var latitude = 15;
        var longitude = 19;
        var url = `https://www.google.com/maps?q=15,19`;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});

