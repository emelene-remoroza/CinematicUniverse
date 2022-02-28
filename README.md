# Gerard's Comments

The page looks great, it has a nice design and everything seems to work well.
It's really impressive how professional the frontend looks

I've left comments around with a `TODO`.

I focussed mostly on the frontend, since your backend is fairly simple, but I
love that you've integrated an external service. (Ideally, your README would
have instructions for setting up the environment so that it works well)

One thing that is baked into your code a lot that is kind of a red flag is
"marvel", if you move to supporting other franchises some of your tables,
function names, filenames etc. just won't make sense anymore. It'll be a big
refactor. Think about what you would need to change so that "marvel" is one
entry in a table, next to "dc", "starwars", or whatever

Test wise, I would like to see some. There's plenty of valuable things to test
here. It's a shame that the functionality is missing the confidence-to-ship you
might get from having some tests around your components (for example).

# Fullstack boilerplate

## Getting Started

### From the Github UI

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

- a single, simple API endpoint (`/api/v1/fruits`)
- a single React component (`<App />`)
- an example database module (`server/db/fruits.js`)
- an API client module (`client/apis/fruits.js`)
- configuration for Jest and testing library
- configuration for server-side debugging in VS Code
- a single client-side test (`client/components/App.test.js`)
