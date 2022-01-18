module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/proctorlogin',
     handler: 'login.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
