# Road Trip Reflections
This is a [Medium](https://medium.com) clone built with a vehicle theme using [React.js](https://reactjs.org), [Redux](https://redux.js.org), and [Node.js](https://nodejs.org).

The idea of this blog is to allow users to add blog posts to vehicles they have used to comment on their experiences whilst driving long journeys.

The endpoint data is created via AWS Lamdba Functions and accessed via API route via API gateway. 

# Technologies Used

1. [React.js](https://reactjs.org)
1. [Redux](https://redux.js.org)
1. [create-react-app](https://github.com/facebook/create-react-app)
1. [Node.js](https://nodejs.org)
1. [Express.js](https://expressjs.com)
1. [MongoDB](https://mongodb.com)

### Features
- Write a blog post
- Social sign-in via Google and Facebook
- View a blog post
- View all blog posts
- Follow a user
- Clap a story to stimulate favourite / liking a post
- Display a list of vehicles, with associated blog posts (WIP)

### Installation
1. Please ensure nodeJS and MondoDB are installed on your system
2. Run `npm install` to install node dependencies.
3. Go to the main drive you work on and ensure there is a `data/db` directory e.g. `C:\data\db\`
4. Start MongoDB instance: `mongod`. (Please note, you may need to add to PATH variables, use this if needed: https://stackoverflow.com/questions/15053893/mongo-command-not-recognized-when-trying-to-connect-to-a-mongodb-server)
5. Run `node server/seeders/userSeeder.js` then `node server/seeders/postSeeder.js` so we have some initial data in mongoDB
6. Run `npm run dev` to start the `nodeidon` daemon.