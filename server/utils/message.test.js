const expect = require('expect');
var {generateMessage} = require('./message');

describe("generateMessage", () => {

        it('should generate corrrect message object', () => {

            var from = "jen";
            var text = "some message";
            var message = generateMessage(from, text);

            expect(typeof message.createdAt).toBe('number');
            expect(message).toMatchObject({from, text});



        });




});


