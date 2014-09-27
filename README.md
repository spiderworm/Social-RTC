# Social-RTC

Experiments in social networking over WebRTC, using:

- [PeerJS](http://peerjs.com/)
- [Cryptico](http://wwwtyro.github.io/cryptico/)
- [Bootstrap](http://getbootstrap.com/) and [Bootswatch](http://bootswatch.com/) - I apologize a thousand times to my designer friends... 
- A bunch of other great JS libraries
- Jankily written client-side code, on my behalf

**Note:** This is a proof of concept and exploration rather than a stable, production ready application. Use at your own risk, the code has gremlins that often jump out at you - I'll blame JS instead of my lackluster JS knowledge :)

You can see a (buggy) running demo at: http://dev.estate/Social-RTC/index.html

## Running

Make sure you have NodeJS installed first.

**1. Clone the repo**

`git clone https://github.com/ummjackson/Social-RTC.git`

**2. Install PeerServer**

From inside the cloned repository directory:

`sudo npm install peer`

**3. Run PeerServer locally**

`node server.js`

It is recommend you use a daemon such as Forever to keep server.js alive.

**4. Start the app**

`open index.html`

## What's Working?

- Login / key pair creation
- Ability to publish posts and change username, with local storage implemented
- Cryptographically secure request / response over WebRTC of user profiles and posts

To give it a shot, install or visit the above demo, login and then make a few posts. Open another tab and sign in as another user. Copy / paste the identifier of your first profile to the input at the top right of your second profile (in the other tab) and hit go. You'll see the first user's profile and can inspect what's happening behind the scenes if you fire up the developer console. Click the "Social" nav header to get back to your profile. If you refresh then re-login your posts should still be there thanks to local storage!