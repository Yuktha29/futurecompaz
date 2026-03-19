const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, grade, password } = req.body;

    if (!name || !email || !phone || !grade || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserQuery, [email], async (checkErr, results) => {
      if (checkErr) {
        console.error(checkErr);
        return res.status(500).json({ message: "Database error while checking user." });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: "Email already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO users (name, email, phone, grade, password) VALUES (?, ?, ?, ?, ?)";

      db.query(
        insertQuery,
        [name, email, phone, grade, hashedPassword],
        (insertErr, result) => {
          if (insertErr) {
            console.error(insertErr);
            return res.status(500).json({ message: "Error creating user." });
          }

          return res.status(201).json({
            message: "User created successfully.",
            userId: result.insertId,
          });
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;