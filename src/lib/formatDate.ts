export const formatDate = (dateString: string, options: any) => {
  return new Date(dateString).toLocaleDateString('en-US', options);
};
