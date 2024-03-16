function useSessionCookie() {
  // Helper function to get cookie value
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "";
  }

  // Helper function to set cookie value
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }

  // Helper function to remove cookie
  function removeCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  return { getCookie, setCookie, removeCookie };
}

export default useSessionCookie;
