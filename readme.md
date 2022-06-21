# Sass Unit Testing

This is a basic proof of concept demonstrating how you might start unit testing a Sass-based library/website.

It isn't common to unit test Sass, however there have been times when I have been working on large libraries that contain plenty of functions and mixins that could certainly benefit from testing.

Based on my experience with this proof of concept, I will definitely be recommending that styling libraries are unit tested going forward. I can see this making refactors much, much easier.

## To run the project
1. Clone the repo
2. Run `yarn` in the project root
3. Run `yarn test`
4. Be amazed.

### Requirements
- NodeJS (probably anything upwards of `v14` - I was on `v16.13` at the time of writing)

### Notes
- I have made a _very_ basic project structure, your needs will probably be different. Hopefully you can play around with the settings in `scss.spec.js` to suit your needs.
- This project uses the [True](https://www.oddbird.net/true/docs/) testing framework in combination with [Jest](https://jestjs.io/)