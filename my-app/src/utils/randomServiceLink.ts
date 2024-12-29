const services = ["/eventAndStaffing", "/technicalServices", "/evServices"];

export const getRandomServiceLink = () => {
  const randomIndex = Math.floor(Math.random() * services.length);
  return services[randomIndex];
}; 