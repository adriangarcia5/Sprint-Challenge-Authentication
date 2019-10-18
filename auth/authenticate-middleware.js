/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  req.session && req.session.user
    ? next()
    : res.status(401).json({ message: "You shall not pass" });
};
