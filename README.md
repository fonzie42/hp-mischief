# Harry Potter Mischief Managed

- Harry Potter is a piece of media that conquered the minds and hearts of millions globally. This project _does not_ endorse the original author in way, and it's simply an exercise with the existing media and available [Harry Potter API](https://hp-api.onrender.com/);

## Running the project:

- You'll need [bun](https://bun.sh/)
- on the terminal run: `bun install`
- and after: `bun dev`

## Scripts

- `bun run dev` or `bun dev` runs the project
- `bun lint`: runs linter on all files, display errors/warning messages;
- `bun lint --fix`: fixes all auto fixable errors;
- `bun generate-component`: runs plop, where you can choose one of the following:
  - components: create the files for a new component
    - the view/logic can be split;
    - it can include a skeleton loader;
  - test: create test files for an existing component

## The Project

- [x] React
- [x] Typescript
- [x] Styling
- [x] State management
- [x] Responsive
- [ ] The user should be able to set their preferred house: Gryffindor, Slytherin, Hufflepuff, Ravenclaw
  - This was not done
- [x] Display:
  - [x] list of all characters
    - [x] Given a character, the user should be able to go to a details page for the character
    - [x] Given a character, the user should be able to favorite the character
  - [x] all students
  - [x] all staff
- [x] Clear navigation between views

### Main Libraries Used

- [Styled-components](https://styled-components.com/)
  - Styling: Easier to use, wide usage across the industry, great documentation;
- [Zustand](https://zustand-demo.pmnd.rs/)
  - State Management: Small, unopinionated and good developer experience, with a lot of useful hooks out of the box;
- [React-Router-Dom](https://reactrouter.com/en/main)
  - Navigation: Robust library and widely used
- [tanstack](https://tanstack.com/)
  - to better deal with API Calls

## Decisions made

- The project is using `bun`. It's a new "all-in-one" js runtime, that _promises_ a lot of speed improvements over node. I wanted to take this opportunity to try it out; In this project it is replacing the `node.js`` server;
- `vite` for bundling the client-side application;
- `Zustand` is a library that I didn't have too much experience, but wanted to experiment with as well;
  - `tanstack` could, arguably, be used as a state management tool as well, but it is intended to deal with the **server state**. In this case, instead of choosing just one (i.e.: Zustand) and create all the api call/hooks boiler plate, I've used both to gain some time;
- `Styled Components` for styling, I ahve a lot of experience with it, and I believe it's one of the most effective ways to style something on the web today. CSS/SCSS are good, but styled components came a long way and has a lot of guarantees out of the box;
- With the exception of the single character route, when there is no data loaded, routes are always loading all characters at once. The API is fast enough to load all of them at the same time, and it improves the developer experience so it's not necessary to keep merging the different arrays; This could be done but would imply more time to deal with it;
- The project assumed the API is a bit brittle, so they wouldn't return types always 100% correctly;
  - With that, it was created an API layer, that translates the unsafe API data to safe data to be used internally on the app;
  - It did take a bit of time, but it's a reality that is not uncommon, and I wanted to replicate that.

## Opportunities to improve

- There are some `any` being used. This was to save some time, they need to be removed to ensure type safety.
- There are no unit tests;
- The Parser layer needs to better handle the `wand` in the character side
- There is no feature to save the user's preferred house;
- The navigation was a bit of a hassle, and need some refinements. Since there are no history stack available out of the box, one can not simply "navigate back", because of the edge case where a user opens a tab with a direct link. Where would they go back to?
  - On the same note, there are some types that needed to be declared/used for routeparams and such;
- The UI could be improved, but to maintain the "short time" approach, there weren't a lot of things done there. Some more animations/interactions would be great, as well as a more skeuomorphic character's file;
