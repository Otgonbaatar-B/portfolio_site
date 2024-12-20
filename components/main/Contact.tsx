"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faEnvelopeOpenText,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => {
    // Form data object
    const templateParams = {
      from_name: fullNameRef.current?.value,
      from_email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
      to_email: emailRef.current?.value, // Хүлээн авагчийн email
    };

    emailjs
      .send(
        "service_egq09oa", // Service ID
        "template_g2y4o5f", // Template ID
        templateParams,
        "JF2Aqv872jGhJvOfj" // Public Key
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            background: "#121212", // Dark background color
            color: "#fff", // White text color
            confirmButtonColor: "#8B5CF6", // Confirm button color
            confirmButtonText: "Great!", // Custom confirm button text
            showClass: {
              popup: "animate__animated animate__fadeIn", // Animation for popup when shown
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut", // Animation for popup when hidden
            },
            buttonsStyling: false, // Disable SweetAlert2's default button styling
            customClass: {
              popup: "popup-class", // Custom class for the popup
              title: "title-class", // Custom class for the title
              confirmButton: "confirm-button-class", // Custom class for the confirm button
            },
          });
        }
      })
      .catch((error) => {
        console.error("Message sending error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          background: "#1a1a1a",
          color: "#fff",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  const checkInputs = () => {
    const inputs = [fullNameRef, emailRef, phoneRef, subjectRef, messageRef];

    inputs.forEach((input) => {
      if (input.current && input.current.value.trim() === "") {
        input.current.classList.add("border-red-500");
        input.current.nextElementSibling?.classList.remove("hidden");
      } else {
        input.current?.classList.remove("border-red-500");
        input.current?.nextElementSibling?.classList.add("hidden");
      }
    });

    if (emailRef.current?.value) {
      checkEmail();
    }
  };

  const checkEmail = () => {
    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = emailRef.current?.nextElementSibling as HTMLElement;

    if (emailRef.current && !emailRef.current.value.match(emailRegex)) {
      emailRef.current.classList.add("border-red-500");
      errorTxtEmail.innerText = emailRef.current.value
        ? "Enter a valid email address"
        : "Email Address cannot be empty";
      errorTxtEmail.classList.remove("hidden");
    } else {
      emailRef.current?.classList.remove("border-red-500");
      errorTxtEmail?.classList.add("hidden");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkInputs();

    if (
      ![fullNameRef, emailRef, phoneRef, subjectRef, messageRef].some((input) =>
        input.current?.classList.contains("border-red-500")
      )
    ) {
      sendEmail();
      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 from-gray-900 to-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="font-bold text-5xl md:text-6xl text-center mb-12"
        >
          <span className="text-white">Get in </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            Touch
          </span>
        </motion.h1>

        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div variants={itemVariants} className="relative group">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
              />
              <input
                type="text"
                ref={fullNameRef}
                placeholder="Full Name"
                autoComplete="off"
                className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              />
              <span className="absolute -bottom-6 left-0 text-red-400 text-sm hidden">
                Full Name cannot be empty
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
              />
              <input
                type="email"
                ref={emailRef}
                placeholder="Email Address"
                autoComplete="off"
                className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              />
              <span className="absolute -bottom-6 left-0 text-red-400 text-sm hidden">
                Email Address cannot be empty
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
              />
              <input
                type="text"
                ref={phoneRef}
                placeholder="Phone Number"
                autoComplete="off"
                className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              />
              <span className="absolute -bottom-6 left-0 text-red-400 text-sm hidden">
                Phone Number cannot be empty
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors"
              />
              <input
                type="text"
                ref={subjectRef}
                placeholder="Subject"
                autoComplete="off"
                className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              />
              <span className="absolute -bottom-6 left-0 text-red-400 text-sm hidden">
                Subject cannot be empty
              </span>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative group mb-8">
            <FontAwesomeIcon
              icon={faFileText}
              className="absolute left-4 top-6 text-gray-400 group-focus-within:text-purple-500 transition-colors"
            />
            <textarea
              ref={messageRef}
              placeholder="Your Message"
              rows={5}
              className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] resize-none"
            />
            <span className="absolute -bottom-6 left-0 text-red-400 text-sm hidden">
              Message cannot be empty
            </span>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
