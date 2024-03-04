import * as Scaffolding from './scaffolding';

if (window.Scaffolding) {
  console.error('Scaffolding is already defined on the window. This may cause issues with the Scaffolding library.');
}

if (process.env.NODE_ENV !== 'production') {
  console.log('This is not a production build. Set NODE_ENV to production or use `npm run build-prod` for improved file size and performance (This message will go away).');
}

window.Scaffolding = Scaffolding;
