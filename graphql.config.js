module.exports = {
  projects: {
    positive: {
      schema: 'schema.graphql',
      documents: ['positive/**/*.ts', 'positive/**/*.graphql'],
    },
    negative: {
      schema: 'schema.graphql',
      documents: ['negative/**/*.ts'],
    }
  }
};
