# MovieDB

Project is using vite over CRA for speed performance reasons.

# Project start

To start project fill in OMDB Api key to .env file (https://www.omdbapi.com/).

yarn dev

# Data fetching

movieApi is axios instance, that attaches apikey from envservice, to allow us using omdbApi.

For fetching we are using react-query. I'm using custom hooks to extract the logic and provide unique queryKey to each hook to manage asynchous state.

# Linters

Project has eslint & stylelint set up along with husky to run lint-staged in precommit hook

# Styling

- MUI with styled engine.
- styled-components for css-in-js styling
