document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Password Show/Hide Toggle Logic ---
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.textContent = "Hide";
            } else {
                input.type = "password";
                this.textContent = "Show";
            }
        });
    });

    // --- 2.  Validation Patterns ----
const patterns = {
  // Full Name → letters, spaces, dot allowed, min 3 chars
  name: /^[a-zA-Z.\s]{3,}$/,

  // Email Validation
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // Phone Number → exactly 10 digits
  phone: /^\d{10}$/,

  // City → only alphabets and spaces
  city: /^[a-zA-Z\s]+$/,

  // Password → min 8 chars, at least 1 letter and 1 number
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,}$/
};

    // Helper: Validates a single input and updates UI
    function validateInput(field, regex, errorElement) {
        if (regex.test(field.value.trim())) {
            field.classList.remove("error");
            field.classList.add("success");
            if(errorElement) errorElement.style.display = "none";
            return true;
        } else {
            field.classList.remove("success");
            field.classList.add("error");
            if(errorElement) errorElement.style.display = "block";
            return false;
        }
    }

    // --- 3. Signup Form Logic ---
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        // Real-time inline validation
        signupForm.addEventListener("input", (e) => {
            const field = e.target;
            const errorElement = document.getElementById(field.id + "Error");
            
            // Check validation if a pattern exists
            if (patterns[field.id] && errorElement) {
                validateInput(field, patterns[field.id], errorElement);
            }
            
            // Special real-time check for confirm password
            if (field.id === "confirmPassword" || field.id === "password") {
                const pass = document.getElementById("password").value;
                const confirmPass = document.getElementById("confirmPassword");
                const confirmError = document.getElementById("confirmPasswordError");
                
                if (confirmPass.value.length > 0) {
                    if (pass === confirmPass.value) {
                        confirmPass.classList.add("success");
                        confirmPass.classList.remove("error");
                        if(confirmError) confirmError.style.display = "none";
                    } else {
                        confirmPass.classList.add("error");
                        confirmPass.classList.remove("success");
                        if(confirmError) confirmError.style.display = "block";
                    }
                }
            }
        });

        // Submit Logic
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const city = document.getElementById("city").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Final Master Validation Check
            if (patterns.name.test(name) && 
                patterns.email.test(email) && 
                patterns.phone.test(phone) && 
                patterns.city.test(city) && 
                patterns.password.test(password) && 
                password === confirmPassword) {
                
                // Fetch existing users from LocalStorage
                let users = JSON.parse(localStorage.getItem("users")) || [];
                
                // Check if email already exists
                if (users.some(user => user.email === email)) {
                    alert("Email already registered! Please sign in.");
                    return;
                }

                // Save new user safely
                users.push({ name, email, phone, city, password });
                localStorage.setItem("users", JSON.stringify(users));
                
                alert("Signup Successful! Redirecting to Sign In...");
                window.location.href = "index.html";
            } else {
                // Manually trigger the input event logic on all fields to show the errors
                signupForm.querySelectorAll("input").forEach(input => {
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                });
                alert("Please correct the errors in the form.");
            }
        });
    }

    // --- 4. Sign In Form Logic ---
    const signinForm = document.getElementById("signinForm");
    if (signinForm) {
        signinForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("loginError");

            if (!patterns.email.test(email)) {
                errorMsg.textContent = "Please enter a valid email format.";
                errorMsg.style.display = "block";
                return;
            }

            // Authenticate from LocalStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                errorMsg.style.display = "none";
                alert("Login Successful! Welcome, " + validUser.name);
                window.location.href = "tourist.html";
            } else {
                errorMsg.textContent = "Invalid email or password. Please try again.";
                errorMsg.style.display = "block";
            }
        });
    }
});