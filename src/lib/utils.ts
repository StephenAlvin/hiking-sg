import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface WhatsAppContactProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function openWhatsAppContact(props?: WhatsAppContactProps) {
  const phoneNumber = "+6596503241";
  let message = "Hello, I'm interested in your hiking services. Can you provide more information?";
  
  if (props) {
    const { name, email, subject, message: customMessage } = props;
    
    // Build a formatted message if custom details are provided
    if (name || email || subject || customMessage) {
      message = "";
      if (name) message += `Name: ${name}\n`;
      if (email) message += `Email: ${email}\n`;
      if (subject) message += `Subject: ${subject}\n`;
      if (customMessage) message += `Message: ${customMessage}\n`;
      if (!message) message = "Hello, I'm interested in your hiking services. Can you provide more information?";
    }
  }
  
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
}