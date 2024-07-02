
exports.getlogin = (req, res, next) => {
   console.log(req.session.isLoggedIn);
   res.render('auth/login', {
       path: '/login',
       pageTitle: 'Login',
       isauthenticated: req.session.isLoggedIn || false // Use the session variable
   });
};


exports.getsignup = (req, res, next) => {
   console.log(req.session.isLoggedIn);
   res.render('auth/signup', {
       path: '/signup',
       pageTitle: 'signup',
       isauthenticated: false 
   });
};

exports.postsignup = (req, res, next) => {
   const email= req.body.email;
   const password=req.body.password;
   const confirmpassword= req.body.confirmpassword;
   // paused this project due to mongodb interaction 

};


exports.postlogin=(req,res,next)=>{
   //  req.islogin=true; // this does not work becz it gets lost on a redirection ..which is a seperate request for every redirection

   //  res.setHeader('Set-Cookie', 'loggedin==true');
    req.session.isLoggedIn= true;
    res.redirect('/');
}
exports.postlogout=(req,res,next)=>{  
   req.session.destroy(()=>{
      res.redirect('/');
   });
}

