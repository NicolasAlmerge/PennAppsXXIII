const accountSid = 'AC064383cc30117124af6eb58ada508056';
const authToken = 'e9e5605bb8e448b803c99ededc07d3a7';
const client = require('twilio')(accountSid, authToken);

const numbers = ['+15794219623', '+15149177352', '+13037093947']

export function sendMessages(digit: string) {
  console.log("Sending Message using Twillio");
  client.messages
    .create({
      body: 'Heat Island Alert! - Testing all NGOs',
      from: '+17078731270',
      to: digit
    })
  }