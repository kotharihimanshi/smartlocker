function locomotiveAnimation() {               //to make locomotive and scrollTrigger work together
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function page2Animation() {
    var page2Center = document.querySelector(".page2-center");
    var video = document.querySelector(".page-2 video");

    page2Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

function navigatetoPage() {
    const url = "location.html"; 
    window.open(url, '_blank');
}

 function gotoHome(){
    window.location.href = "index.html";
}

function navigateToSectionByClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'auto',  });
        document.body.style.overflow = 'auto';  // Ensure scrolling is enabled
        document.documentElement.style.overflow = 'auto';
    } else {
        console.error('Element with the class not found');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("loginModal");
    let openLoginBtn = document.getElementById("openLoginBtn");
    let closeBtn = document.querySelector(".close");
    let loginForm = document.getElementById("loginForm");

    // Open the login modal when button is clicked
    openLoginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents any default action (if it's inside a form)
        modal.style.display = "block";
    });

    // Close the modal when 'X' button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Prevent form submission from reloading the page
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stops the form from refreshing the page

        alert("Login Successful!");
        modal.style.display = "none"; // Close the modal after login
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if user has a preference saved in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️Light";
    }

    // Toggle Dark Mode on Button Click
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference to local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️Light";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙Dark";
        }
    });
});








locomotiveAnimation()
page2Animation()