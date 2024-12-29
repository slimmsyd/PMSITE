const services = ["/eventAndStaffing", "/technicalServices", "/evServices"];

export const getRandomServiceLink = (currentPage: string) => {
  // Filter out the current page from the services array
  const availableServices = services.filter(service => service !== currentPage);
  
  // Select a random service from the available services
  const randomIndex = Math.floor(Math.random() * availableServices.length);
  return availableServices[randomIndex];
}; 