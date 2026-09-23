// ================================
// Cargo Login Backend
// ================================

const users = [
    {
        id: 1,
        name: "Customer",
        email: "customer@gmail.com",
        password: "123456",
        role: "customer"
    },

    {
        id: 2,
        name: "Vendor",
        email: "vendor@gmail.com",
        password: "123456",
        role: "vendor"
    },

    {
        id: 3,
        name: "Admin",
        email: "admin@gmail.com",
        password: "123456",
        role: "admin"
    }
];


// ================================
// Elements
// ================================

const loginForm =
    document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const roleInput =
    document.getElementById("role");

const message =
    document.getElementById("message");

const roles =
    document.querySelectorAll(".role");

const showPassword =
    document.getElementById("showPassword");


// ================================
// Role Selection
// ================================

roles.forEach((button) => {

    button.addEventListener("click", () => {

        roles.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        roleInput.value =
            button.dataset.role;

        message.textContent = "";

    });

});


// ================================
// Show / Hide Password
// ================================

showPassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        showPassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "Show";

    }

});


// ================================
// LOGIN
// ================================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    const role =
        roleInput.value;


    // Find user
    const user = users.find((user) => {

        return (
            user.email === email &&
            user.password === password &&
            user.role === role
        );

    });


    // User not found
    if (!user) {

        message.textContent =
            "Invalid email, password or role.";

        return;

    }


    // ============================
    // LOGIN SUCCESS
    // ============================

    const loggedUser = {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role

    };


    // Save logged-in user
    localStorage.setItem(
        "cargoUser",
        JSON.stringify(loggedUser)
    );


    // Save login state
    localStorage.setItem(
        "cargoLoggedIn",
        "true"
    );


    message.textContent =
        "Login successful!";


    // ============================
    // REDIRECT
    // ============================

    setTimeout(() => {

        if (user.role === "customer") {

            window.location.href =
                "../Customer.html";

        }

        else if (user.role === "vendor") {

            window.location.href =
                "../Vendor.html";

        }

        else if (user.role === "admin") {

            window.location.href =
                "../Admin.html";

        }

    }, 500);

});
