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
import SectionTitle from "../sub/SectionTitle";
import { ContactIcon, SendHorizonal } from "lucide-react";

const Contact = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => {
    const templateParams = {
      from_name: fullNameRef.current?.value,
      from_email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
      to_email: emailRef.current?.value,
    };

    emailjs
      .send(
        "service_egq09oa",
        "template_g2y4o5f",
        templateParams,
        "JF2Aqv872jGhJvOfj"
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Email sent successfully!",
            icon: "success",
            background: "#121212",
            color: "#fff",
            confirmButtonColor: "#8B5CF6",
            confirmButtonText: "Great!",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
            buttonsStyling: false,
            customClass: {
              popup: "popup-class",
              title: "title-class",
              confirmButton: "confirm-button-class",
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
    <motion.div
      initial="hidden"
      animate="visible"
      className="md:flex items-center justify-center w-full z-[20] flex-row gap-5 md:gap-0"
    >
      <section className="flex flex-col items-center justify-center py-12 from-gray-900 to-black">
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
            <SectionTitle title="Contact" icon={<ContactIcon />} />
          </motion.h1>

          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto bg-transparent  rounded-2xl shadow-2xl"
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
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
                  className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] rounded-xl text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] resize-none"
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
              className="flex items-center justify-center gap-4 w-full py-4 bg-transparent border border-[#2A0E61] shadow-lg shadow-[#7042f861] text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Send Message
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-6 h-6 text-[#b49bff]"
              >
                <SendHorizonal />
              </motion.div>
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
