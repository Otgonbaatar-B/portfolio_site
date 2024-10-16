"use client";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
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
    emailjs
      .send(
        "service_egq09oa",
        "template_g2y4o5f",
        {
          from_name: fullNameRef.current?.value,
          from_email: emailRef.current?.value,
          phone: phoneRef.current?.value,
          message: messageRef.current?.value,
        },
        "JF2Aqv872jGhJvOfj"
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
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

    emailRef.current?.addEventListener("keyup", checkEmail);
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
      (e.currentTarget as HTMLFormElement).reset(); // Type assertion to HTMLFormElement
    }
  };

  return (
    <section className="contact">
      <h2 className="text-4xl text-center mb-4">Contact Me!</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="flex justify-between space-x-4 mb-6 text-gray-300 text-base">
          <div className="relative w-1/2">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-5 text-gray-400 focus:border-gray-200"
            />
            <input
              type="text"
              ref={fullNameRef}
              placeholder="Full Name"
              autoComplete="off"
              className="w-full pl-10 px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg text-lg focus:outline-none focus:border-gray-200 transition"
            />
            <span className="text-red-400 text-sm hidden">
              Full Name cannot be empty
            </span>
          </div>
          <div className="relative w-1/2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-5 text-gray-400 focus:border-gray-200"
            />
            <input
              type="email"
              ref={emailRef}
              placeholder="Email Address"
              autoComplete="off"
              className="w-full pl-10 px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg text-lg focus:outline-none focus:border-gray-200 transition"
            />
            <span className="text-red-400 text-sm hidden">
              Email Address cannot be empty
            </span>
          </div>
        </div>
        {/* <div className="relative mb-6">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Username"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-400"
          />
        </div> */}
        <div className="flex justify-between space-x-4 mb-6 text-gray-300">
          <div className="relative w-1/2">
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute left-3 top-5 text-gray-400 focus:border-gray-200"
            />
            <input
              type="text"
              ref={phoneRef}
              placeholder="Phone Number"
              autoComplete="off"
              className="w-full pl-10 px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg text-lg focus:outline-none focus:border-gray-200 transition"
            />
            <span className="text-red-400 text-sm hidden">
              Phone Number cannot be empty
            </span>
          </div>
          <div className="relative w-1/2">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="absolute left-3 top-5 text-gray-400 focus:border-gray-200"
            />
            <input
              type="text"
              ref={subjectRef}
              placeholder="Subject"
              autoComplete="off"
              className="w-full pl-10 px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg text-lg focus:outline-none focus:border-gray-200 transition"
            />
            <span className="text-red-400 text-sm hidden">
              Subject cannot be empty
            </span>
          </div>
        </div>

        <div className="relative mb-6 text-gray-300">
          <FontAwesomeIcon
            icon={faFileText}
            className="absolute left-3 top-5 text-gray-400 focus:border-gray-200"
          />
          <textarea
            ref={messageRef}
            placeholder="Your Message"
            cols={30}
            rows={5}
            className="w-full pl-10 px-4 py-3 bg-transparent border-2 border-gray-400 rounded-lg text-lg focus:outline-none focus:border-gray-200 transition"
          />
          <span className="text-red-400 text-sm hidden">
            Message cannot be empty
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gray-500 text-gray-700 font-semibold text-lg rounded-lg transition duration-300 hover:bg-gray-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
