// utils/validate.ts
export const validate = ({
  firstName,
  email,
  message,
  lastName,
  topic,
  company,
}: {
  firstName?: string;
  email?: string;
  message?: string;
  lastName?: string;
  topic?: string;
  company?: string;
}) => {
  const errors: {
    firstName?: string;
    email?: string;
    message?: string;
    lastName?: string;
    topic?: string;
    company?: string;
  } = {};
  if (!firstName || firstName.trim() === '') {
    errors.firstName = 'First name is required';
  }
  if (!lastName || lastName.trim() === '') {
    errors.lastName = 'Last name is required';
  }
  if (!company || company.trim() === '') {
    errors.company = 'Company name is required';
  }
  if (!topic || topic.trim() === '') {
    errors.topic = 'Topic is required';
  }
  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!message || message.trim() === '') {
    errors.message = 'Message is required';
  }
  return errors;
};
