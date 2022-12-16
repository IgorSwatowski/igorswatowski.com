import { ContactData } from "../pages/api/contact";

export const sendContactForm = async (data: ContactData) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });

    if (!res.ok) throw new Error("Failed to send message");

    return res.json();
  } 
  catch (error) {
    console.error(error);
  }
};