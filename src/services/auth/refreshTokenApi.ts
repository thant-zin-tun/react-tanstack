export const refreshToken = async (refreshToken: string): Promise<string> => {
  try {
    let response = await fetch(
      `http://localhost:8000/authentication/api/token/refresh/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          refresh:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyNjI0NDc4NiwiaWF0IjoxNzI2MTU4Mzg2LCJqdGkiOiIzNTQwYjJmZTMyNjA0YTE2YTYyOTE3OTA2NTNiZTk5YSIsInVzZXJfaWQiOjEsIm5hbWUiOiJUaGFudCBaaW4gVHVuIiwiZW1haWwiOiJ0aGFudHppbnR1bi5tYXJjaDIwMTk5OEBnbWFpbC5jb20ifQ.ig99vKPU0ix1pleKn6QvdaRYTXK5OEcHrN3g8XXCS1Q",
        }),
      }
    );
    let data: { access: string } = await response.json();
    console.log("Refresh Data");
    console.log(data.access);
    console.log("Refresh Data");
    return data.access;
  } catch (error) {
    throw error;
  }
};
