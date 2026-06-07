const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "Login Failed, Token is Required" });
    }

    token = token.split(" ")[1];
    // bearer token me bearer hata ke sirf actual token dega index 1 pe.

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ msg: "Login Failed, Invalid or Expired Token !!!" });
      }
      req.userId = decodedToken.userId;
      req.role = decodedToken.role;

      next();
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
