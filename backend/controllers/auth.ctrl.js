require("dotenv").config();
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretToken = process.env.TOKEN_SECRET;

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).send("Veillez remplir tous les champs");
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return res.status(403).send("Compte introuvable");
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) return res.status(403).send("Mot de passe incorrecte");
    res.status(200).send({
      userId: user.id,
      token: jwt.sign({ userId: user.id }, secretToken),
      name: user.name,
      email: user.email,
      cart: user.cart,
    });
    console.log(user);
  } catch (error) {
    res.status(500).send({ error });
  }
};
