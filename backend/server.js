require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8000;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretToken = process.env.TOKEN_SECRET;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Prisma Config
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  /*   const password = "password123";
  const hash = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: "Yaroslav",
      email: "yaroslav@outlook.com",
      password: hash,
    },
  }); */
}
main()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// Routes
const userRoutes = require("./routes/auth.routes");
app.use("/api", userRoutes);

module.exports = app;
