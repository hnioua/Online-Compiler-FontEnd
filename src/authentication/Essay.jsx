import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "./layout";

// MUI
import {
  Button,
  Typography,
  TextField,
  Container,
  Box,
  Grid,
} from "@mui/material";

// Icons
import {
  FolderOpen,
  Share,
  AccountCircle,
  AdminPanelSettings,
  Send,
  Info,
  ContactMail,
  Twitter,
  GitHub,
} from "@mui/icons-material";

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const heroVariants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
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

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const formVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

export default function Essay() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: API call here
    setFormData({ name: "", email: "", message: "" });
  };

  const advantages = [
    {
      title: "Gestion des Fichiers",
      description:
        "Organisez, éditez et sauvegardez vos fichiers C facilement avec une interface intuitive et moderne.",
      icon: <FolderOpen sx={{ fontSize: 48 }} />,
    },
    {
      title: "Partage Simplifié",
      description:
        "Partagez vos projets avec d'autres développeurs en un seul clic et collaborez en temps réel.",
      icon: <Share sx={{ fontSize: 48 }} />,
    },
    {
      title: "Compte Utilisateur",
      description:
        "Créez un compte pour sauvegarder vos projets et y accéder depuis n'importe où dans le monde.",
      icon: <AccountCircle sx={{ fontSize: 48 }} />,
    },
    {
      title: "Interface Admin",
      description:
        "Gérez vos projets et utilisateurs avec une interface d'administration puissante et complète.",
      icon: <AdminPanelSettings sx={{ fontSize: 48 }} />,
    },
  ];

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

  return (
    <Layout>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="mt-28 text-[#d9e3ea] min-h-screen"
      >
        {/* Hero Section */}
        <motion.div variants={sectionVariants} className="text-center">
          <Container maxWidth="lg">
            <motion.div variants={heroVariants}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  ...headingStyles,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 3,
                }}
              >
                Editeur/Compilateur C
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  ...commonStyles,
                  color: "#9ca3af",
                  mb: 6,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Éditeur et compilateur en ligne de langage C, conçu pour être
                facile, rapide et professionnel
              </Typography>
            </motion.div>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 3, md: 6 },
                mt: 8,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
              }}
            >
              <Link to={"/ide"} replace>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      ...commonStyles,
                      textTransform: "none",
                      background:
                        "linear-gradient(135deg, #5c5cfe 0%, #4a4bff 100%)",
                      fontWeight: 600,
                      fontSize: { xs: 14, md: 16 },
                      borderRadius: "16px",
                      px: { xs: 3, md: 5 },
                      py: 1.5,
                      minWidth: { xs: "200px", md: "220px" },
                      boxShadow: "0 8px 25px rgba(92, 92, 254, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #4a4bff 0%, #3939ff 100%)",
                        boxShadow: "0 12px 35px rgba(92, 92, 254, 0.4)",
                      },
                    }}
                    onClick={() => sessionStorage.setItem("email", "essay")}
                  >
                    Essayer l'éditeur
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Info />}
                  sx={{
                    ...commonStyles,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: { xs: 14, md: 16 },
                    borderRadius: "16px",
                    px: { xs: 3, md: 5 },
                    py: 1.5,
                    minWidth: { xs: "200px", md: "220px" },
                    border: "2px solid #374151",
                    color: "#d9e3ea",
                    "&:hover": {
                      border: "2px solid #5c5cfe",
                      backgroundColor: "rgba(92, 92, 254, 0.1)",
                      boxShadow: "0 8px 25px rgba(92, 92, 254, 0.2)",
                    },
                  }}
                >
                  À propos
                </Button>
              </motion.div>
            </Box>
          </Container>
        </motion.div>

        {/* Advantages Section */}
        <Container maxWidth="lg" sx={{ mt: 16, mb: 16 }}>
          <motion.div variants={sectionVariants}>
            <Typography
              variant="h3"
              sx={{
                ...headingStyles,
                textAlign: "center",
                mb: 8,
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Pourquoi choisir notre plateforme ?
            </Typography>

            <Grid container spacing={4}>
              {advantages.map((advantage, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "20px",
                        textAlign: "center",
                        width: "100%", // occupe la largeur dispo
                        height: "320px", // taille fixe en hauteur
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #5c5cfe 0%, #4a4bff 100%)",
                        },
                      }}
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        transition={{ delay: index * 0.1 + 0.3 }}
                        sx={{
                          color: "#5c5cfe",
                          mb: 3,
                        }}
                      >
                        {advantage.icon}
                      </motion.div>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            ...commonStyles,
                            color: "#d9e3ea",
                            mb: 2,
                            fontSize: "1.25rem",
                            fontWeight: 600,
                          }}
                        >
                          {advantage.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            ...commonStyles,
                            color: "#9ca3af",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            fontWeight: 400,
                          }}
                        >
                          {advantage.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Contact Section */}
        <Container maxWidth="md" sx={{ mb: 16 }}>
          <motion.div variants={sectionVariants}>
            <Typography
              variant="h3"
              sx={{
                ...headingStyles,
                textAlign: "center",
                mb: 6,
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Nous contacter
            </Typography>

            <motion.div variants={formVariants}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  p: 5,
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <TextField
                  label="Nom complet"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                      "&:hover fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />

                <TextField
                  label="Adresse email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                      "&:hover fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />

                <TextField
                  label="Votre message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={5}
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
                      "&:hover fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5c5cfe",
                        borderWidth: "2px",
                      },
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
                    startIcon={<ContactMail />}
                    sx={{
                      ...commonStyles,
                      textTransform: "none",
                      background:
                        "linear-gradient(135deg, #5c5cfe 0%, #4a4bff 100%)",
                      fontWeight: 600,
                      fontSize: 16,
                      borderRadius: "16px",
                      px: 6,
                      py: 1.5,
                      alignSelf: "center",
                      minWidth: "200px",
                      boxShadow: "0 8px 25px rgba(92, 92, 254, 0.3)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #4a4bff 0%, #3939ff 100%)",
                        boxShadow: "0 12px 35px rgba(92, 92, 254, 0.4)",
                      },
                    }}
                  >
                    Envoyer le message
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </motion.div>
        </Container>

        {/* Footer */}
        <motion.div
          variants={sectionVariants}
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
          }}
        >
          <Box
            component="footer"
            sx={{
              background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
              py: 10,
              textAlign: "center",
              color: "#d9e3ea",
              borderTop: "2px solid #374151",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #5c5cfe 0%, #4a4bff 100%)",
              },
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                sx={{
                  ...headingStyles,
                  mb: 4,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Editeur C - Votre plateforme de codage
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  ...commonStyles,
                  color: "#9ca3af",
                  mb: 6,
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                Rejoignez notre communauté de développeurs pour coder, partager
                et collaborer sur des projets C en toute simplicité. Une
                expérience moderne et professionnelle.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: { xs: 3, md: 6 },
                  mb: 8,
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                }}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link to={"/ide"} replace>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        ...commonStyles,
                        textTransform: "none",
                        background:
                          "linear-gradient(135deg, #5c5cfe 0%, #4a4bff 100%)",
                        fontWeight: 600,
                        fontSize: 16,
                        borderRadius: "16px",
                        px: 5,
                        py: 1.5,
                        minWidth: "220px",
                        boxShadow: "0 8px 25px rgba(92, 92, 254, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #4a4bff 0%, #3939ff 100%)",
                          boxShadow: "0 12px 35px rgba(92, 92, 254, 0.4)",
                        },
                      }}
                      onClick={() => sessionStorage.setItem("email", "essay")}
                    >
                      Essayer maintenant
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link to={"/signup"} replace>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<AccountCircle />}
                      sx={{
                        ...commonStyles,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: 16,
                        borderRadius: "16px",
                        px: 5,
                        py: 1.5,
                        minWidth: "220px",
                        border: "2px solid #374151",
                        color: "#d9e3ea",
                        "&:hover": {
                          border: "2px solid #5c5cfe",
                          backgroundColor: "rgba(92, 92, 254, 0.1)",
                          boxShadow: "0 8px 25px rgba(92, 92, 254, 0.2)",
                        },
                      }}
                    >
                      Créer un compte
                    </Button>
                  </Link>
                </motion.div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 6,
                  mb: 6,
                }}
              >
                <motion.a
                  href="https://twitter.com/editeurc"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: commonStyles.fontFamily,
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#5c5cfe")}
                  onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                >
                  <Twitter />
                  Twitter
                </motion.a>

                <motion.a
                  href="https://github.com/editeurc"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: commonStyles.fontFamily,
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#5c5cfe")}
                  onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                >
                  <GitHub />
                  GitHub
                </motion.a>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  ...commonStyles,
                  color: "#6b7280",
                  fontSize: "0.95rem",
                }}
              >
                © 2025 Editeur C. Tous droits réservés.
              </Typography>
            </Container>
          </Box>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
