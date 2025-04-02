"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";

const EmailConfirmation = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Retrieve email from search params safely
  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, [searchParams]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input field
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!email) {
      toast.error("Email is missing!");
      return;
    }

    try {
      const verificationToken = code.join("");
      const response = await axios.post("/api/verify-email", {
        verificationToken,
        email,
      });

      if (response.data.success) {
        toast.success("Email verified successfully!");
        router.push("/signin");
      } else {
        toast.error(
          response.data.error || "Verification failed. Please try again."
        );
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          "An error occurred. Please try again later."
      );
    }
  }, [code, email, router]);

  // Auto-submit when 6 digits are entered
  useEffect(() => {
    if (code.every((val) => val !== "") && code.length === 6) {
      setTimeout(() => handleSubmit(), 100); // Delay execution slightly
    }
  }, [code, handleSubmit]);

  const handleResendToken = async () => {
    if (!email) {
      toast.error("No email found to resend verification token.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/api/resend-token", { email });

      if (response.status === 200) {
        toast.success("Verification token resent successfully!");
      } else {
        toast.error(response.data.error || "Failed to resend token.");
      }
    } catch (error) {
      toast.error("An error occurred while resending the token.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row md:flex-row">
        <div className="w-1/2 lg:flex md:flex hidden">
          <Image
            src="/confirm.jpg"
            alt="Confirmation"
            width={500}
            height={500}
            quality={100}
            className="w-full h-screen"
          />
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full h-screen flex flex-col items-center bg-gray-200 pt-6">
          <div className="flex flex-col my-auto items-center">
            <div className="text-center">
              <h1 className="text-xl font-semibold mb-2">Email Confirmation</h1>
              <p className="text-gray-600 mb-6">
                Enter the code sent to <br /> <strong>{email}</strong>
              </p>
            </div>

            <div className="flex justify-center space-x-2 mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    if (el) inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-10 h-10 text-center text-lg font-medium border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                />
              ))}
            </div>

            <button>
              I didn’t receive any code.{" "}
              <span
                onClick={handleResendToken}
                className="resend-button text-green-500 underline cursor-pointer text-sm"
              >
                {isLoading ? "Resending..." : "Resend"}
              </span>
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default EmailConfirmation;
