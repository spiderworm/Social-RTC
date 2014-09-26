# Social-RTC

Experiments in social networking over WebRTC, using:

- [PeerJS](http://peerjs.com/)
- [Cryptico](http://wwwtyro.github.io/cryptico/)
- [Bootstrap](http://getbootstrap.com/) and [Bootswatch](http://bootswatch.com/) - I apologize a thousand times... 
- Hackily written client-side code

**Note:** This is a proof of concept and exploration rather than a stable, production ready application. Use at your own risk, the code has gremlins that often jump out at you - I'll blame JS instead of my lackluster JS knowledge :)

## Running

Make sure you have NodeJS installed first.

**1. Install PeerServer globally**

`sudo npm install peer -g`

*Sometimes requires root access*

**2. Clone the repo**

`git clone https://github.com/ummjackson/Social-RTC.git`

**3. Run PeerServer locally**

`node server.js`

**4. Fire up the app**

`open index.html`

## What's Working?

- Simple connection brokering based on hashes of public keys
- Post propagation across WebRTC with feed GUI implemented