const jwt = require("jsonwebtoken");

const SECRET_KEY = "hfdsfw3e";

const headers =  {
    "alg": "HS256",
    "typ": "JWT"
};

const payload = {
    id: "6100417ffd0e5512c436c5d2"
};

const token = jwt.sign(payload, SECRET_KEY);
console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyToken = jwt.verify(`${token}`, SECRET_KEY);
    console.log(verifyToken)
}
catch(error){
    console.log(error);
}


