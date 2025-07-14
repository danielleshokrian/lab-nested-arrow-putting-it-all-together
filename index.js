function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  const loginAttempt = (passwordAttempt) => {
    if (isLocked) {
      return 'Account locked due to too many failed login attempts';
    }
    attemptCount += 1;

    if (attemptCount > 3) {
      isLocked = true;
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
    return `Login failed`;
    }
  };
  return loginAttempt;
}





module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};