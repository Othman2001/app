export default {
  routes: [
    {
     method: 'GET',
     path: '/articlesAgeRange',
     handler: 'articles.find',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
