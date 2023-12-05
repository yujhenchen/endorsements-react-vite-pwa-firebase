export function getUserID(): string {
  try {
    const userID = localStorage.getItem("userID");
    return userID ? userID : "";
  } catch (error) {
    console.log(`Failed to get user ID: ${error}`);
    return "";
  }
}

export function setUserID(userID: string): void {
  try {
    localStorage.setItem("userID", userID);
  } catch (error) {
    console.log(`Failed to set user ID: ${error}`);
  }
}
