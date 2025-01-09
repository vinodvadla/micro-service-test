// Import express library
const express = require("express");
const {
  sequelize,
  User,
  Test,
} = require("@vinodvadla7144/shared-models/models");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.get("/", (req, res) => {
  User.findAll({
    include: [
      {
        model: Test,
        as: "tests",
      },
    ],
  }).then((users) => res.json(users));
});
app.get("/about", (req, res) => {
  res.send("This is a simple Express app!");
});

const syncDb = async () => {
  await sequelize.sync({ alter: true });
  console.log("database sync successfull !-");
};

// syncDb();

sequelize.sync({ alter: false, force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
