import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import {
  openEmailClient,
  validateFormData,
  type EmailData,
} from "../utils/emailUtils";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validation = validateFormData(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      // Open email client with form data
      openEmailClient(formData);

      // Show success message
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error opening email client:", error);
      setSubmitStatus("error");
      setErrors(["Failed to open email client. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${className}`}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gray-300rounded-lg flex items-center justify-center">
          <Mail className="w-5 h-5 text-gray-800" />
        </div>
        <h4 className="text-xl font-semibold text-black">Quick Message</h4>
      </div>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-400/10 border border-green-400/30 rounded-lg flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <p className="text-green-400 font-medium">
              Email client opened successfully!
            </p>
            <p className="text-green-300 text-sm">
              Your message has been prepared in your default email application.
            </p>
          </div>
        </div>
      )}

      {/* Error Messages */}
      {submitStatus === "error" && errors.length > 0 && (
        <div className="mb-6 p-4 bg-red-400/10 border border-red-400/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 font-medium mb-2">
                Please fix the following errors:
              </p>
              <ul className="text-red-300 text-sm space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-300/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all text-black placeholder-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-300/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all text-black placeholder-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Your Message"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-300/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all resize-none text-black placeholder-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black py-3 px-6 rounded-lg font-medium hover:from-green-400 hover:to-green-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>Opening Email Client...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-800 text-xs">
          This will open your default email application with the message
          pre-filled
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
