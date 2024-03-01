import axios from "axios";

const baseUrl = "https://presale-backend.onrender.com";

export const apiCall = async (url, method, data = null, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const config = {
      method,
      url,
      headers,
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    if (response.status >= 400) {
      return { data: response.data, status: response.status };
    }
    return response.data;
  } catch (err) {
    throw Error(err.response.data.message);
  }
};

export const methods= {
  get:"GET",
  post:"POST",
  del:"DELETE",
  put:"PUT"
}

export const authEndpoints = {
  login:`${baseUrl}/login`,
  signup:`${baseUrl}/signup`,
  
}

