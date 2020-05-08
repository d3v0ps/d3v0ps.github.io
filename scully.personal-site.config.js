exports.config = {
  projectRoot: "./src",
  projectName: "personal-site",
  outDir: './dist/static',
  routes: {
    '/persona/:id': {
      type: 'contentFolder',
      id: {
        folder: "./persona"
      }
    },
    '/kernel/:id': {
      type: 'contentFolder',
      id: {
        folder: "./kernel"
      }
    },
    '/lists/:id': {
      type: 'contentFolder',
      id: {
        folder: "./lists"
      }
    },
    '/creativeworks/:id': {
      type: 'contentFolder',
      id: {
        folder: "./creativeworks"
      }
    },
    '/infiniteloop/:id': {
      type: 'contentFolder',
      id: {
        folder: "./infiniteloop"
      }
    },
  }
};
