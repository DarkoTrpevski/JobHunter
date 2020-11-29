export const checkColorMode = (): boolean => {
  const isDarkMode = localStorage.getItem('darkMode');
  if(isDarkMode === "true") return true;
  else return false;
}