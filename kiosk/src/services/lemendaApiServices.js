import axios from "axios";

const apiUrl =
  "https://lemenda-inventory-project1.vestahomes.com.ph/api/json-data-units";

const apiCarparkUrl =
  "https://lemenda-inventory-project1.vestahomes.com.ph/api/json-data-carpark";

const nivelApiUrl =
  "https://lemenda-inventory-project2.vestahomes.com.ph/api/json-data-units";

const nivelApiCarparkUrl =
  "https://lemenda-inventory-project2.vestahomes.com.ph/api/json-data-carpark";

export const project1Data = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const project2Data = async () => {
  try {
    const response = await axios.get(nivelApiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const project1CarparkData = async () => {
  try {
    const response = await axios.get(apiCarparkUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const project2CarparkData = async () => {
  try {
    const response = await axios.get(nivelApiCarparkUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
