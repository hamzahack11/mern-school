const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    console.log("Token received:", token); // Log the received token

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.log("JWT verification error:", err); // Log any verification error

        return res.status(401).send({
          success: false,
          message: "AUTH failed",
        });
      } else {
        req.body.userId = decode.userId;
        console.log("User ID from token:", decode.userId); // Log the user ID from the token

        next();
      }
    });
  } catch (error) {
    console.log("Error in authMiddleware:", error); // Log any other errors
    return res.status(401).send({
      success: false,
      error,
      message: "auth failed",
    });
  }
};
