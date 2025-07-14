function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (failedAttempts >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      failedAttempts += 1;
      if (failedAttempts >= 3) {
        return 'Account locked due to too many failed login attempts';
      }
      return `Login failed`;
    }
  };

  return loginAttempt;
}





module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};