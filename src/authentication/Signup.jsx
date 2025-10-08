import {
  Alert,
  Snackbar,
  Typography,
  TextField,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Layout from "./layout";

// Animations réutilisées
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const formVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0 10px 25px rgba(92, 92, 254, 0.3)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

// Styles communs
const commonStyles = {
  fontFamily:
    "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
  letterSpacing: "0.5px",
};

const headingStyles = {
  ...commonStyles,
  fontWeight: 700,
  background: "linear-gradient(135deg, #d9e3ea 0%, #a8b5c2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);

    if (!formData.user || !formData.email.includes("@") || !formData.password) {
      setToast({
        open: true,
        message: "Veuillez remplir correctement tous les champs",
      });
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setToast({
        open: true,
        message: "Les mots de passe ne correspondent pas",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/Auth/signup",
        formData
      );
      if (res.data === "ok") navigate("/signin");
    } catch (err) {
      if (err.response?.status === 501) {
        setToast({ open: true, message: "Email déjà utilisé" });
      } else {
        setToast({ open: true, message: "Erreur serveur" });
      }
    }
    setLoading(false);
  }

  return (
    <Layout>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="mt-28 min-h-screen text-[#d9e3ea] flex items-center justify-center"
      >
        <Container maxWidth="sm">
          <motion.div variants={formVariants}>
            <Box
              component="form"
              onSubmit={handleSignup}
              sx={{
                p: 5,
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ ...headingStyles, mb: 2 }}
              >
                Créez votre compte
              </Typography>

              <TextField
                label="Nom complet"
                name="user"
                value={formData.user}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#d9e3ea",
                    ...commonStyles,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9ca3af",
                    ...commonStyles,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#374151",
                      borderRadius: "12px",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": { borderColor: "#5c5cfe" },
                    "&.Mui-focused fieldset": { borderColor: "#5c5cfe" },
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#d9e3ea",
                    ...commonStyles,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9ca3af",
                    ...commonStyles,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#374151",
                      borderRadius: "12px",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": { borderColor: "#5c5cfe" },
                    "&.Mui-focused fieldset": { borderColor: "#5c5cfe" },
                  },
                }}
              />
              <TextField
                label="Mot de passe"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#d9e3ea",
                    ...commonStyles,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9ca3af",
                    ...commonStyles,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#374151",
                      borderRadius: "12px",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": { borderColor: "#5c5cfe" },
                    "&.Mui-focused fieldset": { borderColor: "#5c5cfe" },
                  },
                }}
              />
              <TextField
                label="Confirmation mot de passe"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#d9e3ea",
                    ...commonStyles,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9ca3af",
                    ...commonStyles,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#374151",
                      borderRadius: "12px",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": { borderColor: "#5c5cfe" },
                    "&.Mui-focused fieldset": { borderColor: "#5c5cfe" },
                  },
                }}
              />

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    ...commonStyles,
                    textTransform: "none",
                    background:
                      "linear-gradient(135deg, #5c5cfe 0%, #4a4bff 100%)",
                    fontWeight: 600,
                    fontSize: 16,
                    borderRadius: "16px",
                    py: 1.5,
                    mt: 2,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4a4bff 0%, #3939ff 100%)",
                    },
                  }}
                >
                  {loading ? "Chargement..." : "S'inscrire"}
                </Button>
              </motion.div>

              <Typography
                textAlign="center"
                sx={{ ...commonStyles, color: "#9ca3af", mt: 2 }}
              >
                Vous avez déjà un compte ?{" "}
                <Link to="/signin" style={{ color: "#5c5cfe" }}>
                  Se connecter
                </Link>
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </motion.div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ open: false, message: "" })}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Layout>
  );
}
