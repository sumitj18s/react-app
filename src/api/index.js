const BASE_URL = "http://localhost:8080/";

function api() {
  return {
    getUsers: async () => {
      const url = `${BASE_URL}users`;
      console.log({url});
      const response = await fetch(url);
      const apiResponse = await response.json();

      return apiResponse;
    },

    submitUser: async ({ name, address, city }) => {
      const url = `${BASE_URL}user`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, city }),
      });

      return await response.json();
    },
  };
}

export default api;
