## Nx-VODS

# Streamer VOD Analysis App

This application allows users to search for streamers and display their past VODs. When a user clicks on a VOD, the app connects to the Twitch API to retrieve all the messages for that VOD. The app then performs analysis and provides statistics such as the most active users, most used emotes, etc.

## todo

- [x] Set up the Nx workspace
- [x] Create the Angular client application
- [x] Create the NestJS server application
- [ ] Deploy the application
- [ ] Setup CI/CD
- [ ] Integrate Twitch API for retrieving streamers and VODs
- [ ] Develop search functionality for streamers
- [ ] Display list of past VODs for selected streamers
- [ ] Fetch and display messages for selected VODs
- [ ] Analyze messages to provide statistics (e.g., most active users, most used emotes)
- [ ] Design and implement user interface
- [ ] Set up CI/CD pipelines (if required)
- [ ] Write tests for client and server applications

## Technologies Used

- Angular
- NestJS
- ... (idk yet) 

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/streamer-vod-analysis-app.git
cd streamer-vod-analysis-app
pnpm install
```

## Running the App

To start the client application:

```bash
nx serve client
```

To start the server application:

```bash
nx serve server
```
