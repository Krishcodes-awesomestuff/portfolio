document.addEventListener("DOMContentLoaded", () => {
  // Button click animations
  const ctaButton = document.querySelector(".cta-button")
  const signupBtn = document.getElementById("signup-btn")

  ctaButton.addEventListener("click", function () {
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
      alert("More information coming soon!")
    }, 150)
  })

  signupBtn.addEventListener("click", function () {
    const emailInput = document.getElementById("email")
    const email = emailInput.value.trim()

    if (email === "") {
      alert("Please enter your email address.")
      return
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.")
      return
    }

    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
      emailInput.value = ""
      alert("Thank you for subscribing!")
    }, 150)
  })

  // Simple email validation
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
})
