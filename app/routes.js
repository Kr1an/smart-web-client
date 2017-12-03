// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/home',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/menu',
      name: 'menu',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Menu/reducer'),
          import('containers/Menu/sagas'),
          import('containers/Menu'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('menu', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/pages(/:id)',
      name: 'pages',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Pages/reducer'),
          import('containers/Pages/sagas'),
          import('containers/Pages'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('pages', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/structure',
      name: 'structure',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Structure/reducer'),
          import('containers/Structure/sagas'),
          import('containers/Structure'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('structure', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/templates',
      name: 'templates',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Templates/reducer'),
          import('containers/Templates/sagas'),
          import('containers/Templates'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('templates', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/',
      onEnter: (_nextState, replace, next) => {
        replace('/home');
        next();
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
