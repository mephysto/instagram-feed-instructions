# Creating an Instagram feed of your user profile.
Instructions on how to set up an Instagram Feed for your project.

## Here's what you need
- Credentials to the user profile
- A Facebook Developer account
- Some kind of Node set up. e.g. a Vercel-Next.js project

## Getting a long-term token
- Go to: https://developers.facebook.com/apps/ and log in. This doesn't need to be the account you need to create a feed for per se. Log in with a Facebook developer account if your agency has it, or use your own one.
- Click ADD A NEW APP
- Choose "for everything else"
- Give it a name
- Pick INSTAGRAM -> Set up
- In the sidebar, find "BASIC DISPLAY"
- Scroll down to find "USER TOKEN GENERATOR"
- If not exists, click "CREATE NEW PLATFORM" to get this dialogue
- If no INSTAGRAM TESTERS exist. click ADD OR REMOVE INSTAGRAM TESTERS
- Click ADD INSTAGRAM TESTERS and find the account you want to show the feed for.
- The account holder will receive a pending request to accept. Tell them to go to https://www.instagram.com/accounts/manage_access/ and into the TESTER INVITES tab, and accept the invite.
- When it's added, go back to the BASIC DISPLAY page, and scroll down to USER TOKEN GENERATOR.
- Click GENERATE TOKEN. And go through the steps until you get it. You'll need the target profile's credentials here again.

## Getting the feed
You'll basically use the token to fetch this url: `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token={ACCESS_TOKEN}`

Or you can save the token in a .env file as a value for INSTA_ACCESS_TOKEN. And you can run this project. See index.js for an example how to work the API.

ps. Keep your token hidden, and never add a token to a code repository.

