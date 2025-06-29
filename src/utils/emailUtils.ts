/**
 * Email utility functions for opening system email client
 */

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Opens the user's default email client with pre-filled data
 */
export const openEmailClient = (data: EmailData): void => {
  const { name, email, message } = data;
  
  // Email configuration
  const recipientEmail = 'hello@johndoe.dev';
  const subject = `Contact Form Message from ${name}`;
  
  // Create email body with proper formatting
  const emailBody = `
Hello John,

You have received a new message through your portfolio contact form.

From: ${name}
Email: ${email}

Message:
${message}

---
This message was sent through your portfolio website contact form.
  `.trim();

  // Encode the email components for URL
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(emailBody);
  
  // Create mailto URL
  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  
  try {
    // Open the email client
    window.location.href = mailtoUrl;
  } catch (error) {
    console.error('Failed to open email client:', error);
    
    // Fallback: copy email details to clipboard
    copyEmailToClipboard(data);
  }
};

/**
 * Fallback function to copy email details to clipboard
 */
export const copyEmailToClipboard = async (data: EmailData): Promise<void> => {
  const { name, email, message } = data;
  
  const emailText = `
To: abhijitdey.biet@gmail.com
Subject: Contact Form Message from ${name}

From: ${name}
Email: ${email}

Message:
${message}
  `.trim();

  try {
    await navigator.clipboard.writeText(emailText);
    alert('Email details copied to clipboard! Please paste into your email client.');
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    
    // Final fallback: show alert with email details
    alert(`Please send an email to abhijitdey.biet@gmail.com with the following details:\n\nFrom: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates form data
 */
export const validateFormData = (data: EmailData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};