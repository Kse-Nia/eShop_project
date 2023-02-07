require("dotenv").config();
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (fields.some((field) => !field)) {
    return res.status(403).send("Veillez remplir tous les champs");
  }
  const regex = "^[A-Za-z0-9+_.-]+@(.+)$"; // Regex Email Format
  if (!email.match(regex)) {
    return res.status(403).send("Email invalide");
  } else {
    try {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        name,
        email,
        password: hash,
      });
      const token = jwt.sign({ userId: newUser.id }, secretToken);
      res.status(201).send({
        user: newUser,
        token,
      });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(403).send("Veillez remplir tous les champs");
  }
  const regex = "^[A-Za-z0-9+_.-]+@(.+)$"; // Vérification format email
  if (!email.match(regex)) {
    return res.status(403).send("Email invalide");
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return res.status(403).send("Compte introuvable");
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(403).send("Mot de passe incorrecte");
    res.status(200).send({
      userId: user.id,
      token: jwt.sign({ userId: user.id }, secretToken),
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getUserAccount = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: "Une erreur est survenue",
    });
  }
};
