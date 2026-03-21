const db = require("../db");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  console.log("Signup request received:", req.body);

  try {
    const { name, email, phone, grade, password } = req.body;

    if (!name || !email || !phone || !grade || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }

    const checkUserQuery = "SELECT * FROM users WHERE email = ?";

    db.query(checkUserQuery, [email], async (checkErr, results) => {
      if (checkErr) {
        console.error("Check user error:", checkErr);
        return res.status(500).json({
          message: "Database error while checking user.",
        });
      }

      if (results.length > 0) {
        return res.status(400).json({
          message: "Email already registered.",
        });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUserQuery = `
          INSERT INTO users (name, email, phone, grade, password)
          VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
          insertUserQuery,
          [name, email, phone, grade, hashedPassword],
          (insertErr, result) => {
            if (insertErr) {
              console.error("Insert user error:", insertErr);
              return res.status(500).json({
                message: "Error creating account.",
              });
            }

            return res.status(201).json({
              message: "Account created successfully!",
              user: {
                id: result.insertId,
                name,
                email,
                phone,
                grade,
              },
            });
          }
        );
      } catch (hashError) {
        console.error("Hash error:", hashError);
        return res.status(500).json({
          message: "Error securing password.",
        });
      }
    });
  } catch (error) {
    console.error("Signup controller error:", error);
    return res.status(500).json({
      message: "Server error.",
    });
  }
};

const login = (req, res) => {
  console.log("Login request received:", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const findUserQuery = "SELECT * FROM users WHERE email = ?";

    db.query(findUserQuery, [email], async (err, results) => {
      if (err) {
        console.error("Find user error:", err);
        return res.status(500).json({
          message: "Database error while logging in.",
        });
      }

      if (results.length === 0) {
        return res.status(400).json({
          message: "No account found with this email.",
        });
      }

      const user = results[0];

      try {
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({
            message: "Invalid password.",
          });
        }

        return res.status(200).json({
          message: "Login successful!",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            grade: user.grade,
          },
        });
      } catch (compareError) {
        console.error("Password compare error:", compareError);
        return res.status(500).json({
          message: "Error verifying password.",
        });
      }
    });
  } catch (error) {
    console.error("Login controller error:", error);
    return res.status(500).json({
      message: "Server error.",
    });
  }
};

module.exports = { signup, login };