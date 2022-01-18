module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/proctorlogin',
     handler: 'login.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
