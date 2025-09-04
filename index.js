// console.log(" something........")
// document.querySelector('.cross').style.display = 'none'
// document.querySelector('.hamburger').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else{
//         document.querySelector('.ham').style.display = 'none'
//         setTimeout(()=>{
//             document.querySelector('.cross').style.display = 'inline'
            

//         },300);
//     }

// })

// document.addEventListener("DOMContentLoaded", function () {
//     const sidebar = document.querySelector('.sidebar');
//     const hamburger = document.querySelector('.hamburger');

//     function toggleSidebar() {
//         if (window.innerWidth <= 768) { // Adjust 768px as per your mobile breakpoint
//             // Mobile view: Show hamburger, hide sidebar
//             hamburger.style.display = "block";
//             sidebar.style.display = "none";

//             // Add toggle functionality to the hamburger
//             hamburger.addEventListener("click", function () {
//                 if (sidebar.style.display === "block") {
//                     sidebar.style.display = "none";
//                 } else {
//                     sidebar.style.display = "block";
//                 }
//             });
//         } else {
//             // Desktop view: Show sidebar, hide hamburger
//             hamburger.style.display = "none";
//             sidebar.style.display = "inline";
//         }
//     }

//     // Run on page load
//     toggleSidebar();

//     // Add event listener for window resize
//     window.addEventListener("resize", toggleSidebar);
// });



document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    const hamIcon = document.querySelector('.ham');
    const crossIcon = document.querySelector('.cross');

    // Initially hide the cross icon
    crossIcon.style.display = 'none';

    // Function to toggle sidebar
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle('sidebarGo');

        if (sidebar.classList.contains('sidebarGo')) {
            // Sidebar is closed
            hamIcon.style.display = 'inline';
            crossIcon.style.display = 'none';
        } else {
            // Sidebar is open
            hamIcon.style.display = 'none';
            setTimeout(() => {
                crossIcon.style.display = 'inline';
            }, 300); // Match with your animation duration
        }
    });

    // Handle screen resizing or initial load
    function handleResize() {
        if (window.innerWidth >1282) {
            // Desktop view: Sidebar is always open, hamburger hidden
            sidebar.classList.remove('sidebarGo'); // Ensure sidebar is visible
            hamIcon.style.display = 'none';
            crossIcon.style.display = 'none';
            hamburger.style.display = 'none';
        } else {
            // Mobile view: Sidebar starts closed, hamburger visible
            sidebar.classList.add('sidebarGo'); // Ensure sidebar is hidden
            hamburger.style.display = 'block';
            hamIcon.style.display = 'inline';
            crossIcon.style.display = 'none';
        }
    }

    // Run on page load and resize
    handleResize();
    window.addEventListener("resize", handleResize);
});
