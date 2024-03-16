// function for generating url form local machine

export const getLocalImageURL = (files, callback) => {
  const file = files[0];
  const reader = new FileReader();

  reader.onload = () => {
    callback(reader.result); // Pass the result to the callback function
  };

  reader.onerror = () => {
    // Handle error if file reading fails
    console.error("Error reading the file.");
  };

  reader.readAsDataURL(file);
};
