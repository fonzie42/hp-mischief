# Harry Potter Mischief Managed

- Harry Potter is a piece of media that conquered the minds and hearts of millions globally. This project _does not_ endorse the original author in way, and it's simply an exercise with the existing media and available [Harry Potter API](https://hp-api.onrender.com/);

## Scripts

- `bun run dev` or `bun dev` runs the project
- `bun lint`: runs linter on all files, display errors/warning messages;
- `bun lint --fix`: fixes all auto fixable errors;
- `bun generate-component`: runs plop, where you can choose one of the following:
  - components: create the files for a new component
    - the view/logic can be splitted;
    - it can include a skeleton loader;
  - test: create test files for an existing component


## The Project

- [x] React
- [x] Typescript
- [ ] Styling: Styled component
- [ ] State management
- [ ] Responsive
- [ ] The user should be able to set their preferred house: Gryffindor, Slytherin, Hufflepuff, Ravenclaw
- [ ] Display:
  - [ ] list of all characters
    - [ ] Given a character, the user should be able to go to a details page for the character
    - [ ] Given a character, the user should be able to favorite the character
  - [ ] all students
  - [ ] all staff
- [ ] The app should make use of colors and fonts that make aesthetic sense
- [ ] Clear navigation between views

## Decisions made

- The project is using `bun`. It's a new "all-in-one" js runtime, that _promises_ a lot of speed improvements over node. I wanted to take this opportunity to try it out; In this project it is replacing the `node.js`` server;
- `vite` for bundling the client-side application
