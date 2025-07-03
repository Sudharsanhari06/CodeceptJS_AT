module.exports = {
    isValidEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },

    isValidAge(age) {
      return Number.isInteger(Number(age)) && age >= 0 && age <= 100;
    },
  
    isValidName(name) {
      return typeof name === 'string' && name.trim().length > 0;
    },
  
    isValidSalary(salary) {
      return !isNaN(salary) && salary >= 1000;
    },
  
    isValidDepartment(dept) {
      return typeof dept === 'string' && dept.trim().length > 0;
    }
  };
  