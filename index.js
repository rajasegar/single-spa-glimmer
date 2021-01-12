const defaultOpts = {
  renderComponent: null, // renderComponent function from @glimmer/core
  App: null, //parent Component for the app
  root: null,  // root element DOM id eg. #app
  owner: null, // owner object for the app with service injections
}

export default function singleSpaGlimmer(userOpts) {
  if (typeof userOpts !== 'object') {
    throw new Error(`single-spa-glimmer requires a configuration object`);
  }

  const opts = {
    ...defaultOpts,
    ...userOpts,
  };

  if (!opts.App) {
    throw new Error(`single-spa-glimmer must be passed opts.App`);
  }

  if (opts.renderComponent && typeof opts.renderComponent !== 'function') {
    throw new Error(`single-spa-glimmer: renderComponent must be a function `);
  }

  return {
    bootstrap: bootstrap.bind(null, opts),
    mount: mount.bind(null, opts),
    unmount: unmount.bind(null, opts),
  };
}

function bootstrap(opts) {
  return Promise.resolve();
}

function mount(opts) {
  return Promise
    .resolve()
    .then(() => {
      // Turning off validator registration for allowing multiple glimmer apps in same page
      globalThis[Symbol.for('GLIMMER_VALIDATOR_REGISTRATION')] = false;
      const { renderComponent, App, root, owner } = opts;
      const element = document.getElementById(root);
      renderComponent(App, { 
        element,
        owner,
      });
    });
}

function unmount(opts) {
  return Promise
    .resolve()
    .then(() => {
      return true;
    })
}
