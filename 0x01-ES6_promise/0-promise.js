export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = { data: 'Sample API response' };
        resolve(response);
      }, 1000); 
    });
  }
  