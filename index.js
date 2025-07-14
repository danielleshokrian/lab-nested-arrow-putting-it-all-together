function createLoginTracker(userInfo) {
  if (
    typeof userInfo !== 'object' ||
    typeof userInfo.username !== 'string' ||
    typeof userInfo.password !== 'string'
  ) {
    throw new Error("Invalid userInfo: must be an object with 'username' and 'password' as strings.");
  }

  let attemptCount = 0;

  
  return (passwordAttempt) => {
    
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      
      attemptCount += 1;

      
      if (attemptCount >= 3) {
        return 'Account locked due to too many failed login attempts';
      }

      
      return `Attempt ${attemptCount}: Login failed`;
    }
  
  };

  return loginAttempt;
}
const login = createLoginTracker({ username: "user1", password: "pass123" });

console.log(login("wrong")); 






module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};