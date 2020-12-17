const defaultOpts = {
  renderComponent: null, // renderComponent function from @glimmer/core
  App: null, // parent Component for the app
  rootElement: null,  // mount point for the App component
}

export default function singleSpaGlimmer(userOpts) {
  console.log('inside single spa glimmer');
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
    const { renderComponent, App, rootElement } = opts;
    renderComponent(App, rootElement);
    });
}

function unmount(opts) {
  return Promise
    .resolve()
    .then(() => {
      return true;
    })
}
