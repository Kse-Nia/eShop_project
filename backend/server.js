require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
// Prisma Config
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
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
/* const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes); */

module.exports = app;
