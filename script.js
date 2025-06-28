function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");
  
    if (!dobInput) {
      result.textContent = "⚠️ Please enter your date of birth!";
      return;
    }
  // javascirpt
    const dob = new Date(dobInput);
    const today = new Date();
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // If birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    result.textContent = `🎉 You are ${age} years old!`;
  }
  
// hello i am comment 1