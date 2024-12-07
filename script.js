function openNav() {
    document.getElementById("mySidebar").style.width = "200px"; 
    document.getElementById("main").style.marginRight = "200px"; 
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0"; 
  }

  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("mySidebar");
    const openButton = document.querySelector(".openbtn");
  
    // Close the sidebar if clicking outside of it and not on the open button
    if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
      sidebar.style.width = "0";
    }
  });
  


  
   // Detect elements in the viewport
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

// Observe all why elements
document.querySelectorAll('.whys > div').forEach(why => observer.observe(why));


   // Intersection Observer for scroll animations
   const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

// Observe each FAQ item
document.querySelectorAll('.qns div').forEach(faq => observer1.observe(faq));
 

//for demo

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observe the demo section
const demoElement = document.querySelector('.demo');
observer2.observe(demoElement);





function showside(){
    const menubar=document.querySelector('.menubar');
    menubar.style.display="flex";
}
function closeside(){
    const menubar=document.querySelector('.menubar');
    menubar.style.display="none";
}


function ToDemo() {
    window.location.href = "demopage.html";
  }



  //faqs

   // Array of questions and answers
   const faqs = [
    { 
        question: "What is an HVAC ERP system, and why is it important?", 
        answer: "An HVAC ERP system is specialized software designed to manage all aspects of HVAC business operations, including scheduling, inventory management, billing, and reporting. It centralizes workflows, improves efficiency, and ensures better customer service by automating routine tasks and providing real-time data. ."
    },
    { 
        question: "How does an HVAC ERP system improve scheduling and dispatching?", 
        answer: "An HVAC ERP system enables real-time scheduling and dispatching by optimizing technician availability, prioritizing urgent tasks, and mapping routes efficiently. This reduces downtime, ensures timely service delivery, and enhances customer satisfaction"
    },
    { 
        question: "Can HVAC ERP systems integrate with existing accounting and CRM tools?", 
        answer: "Yes, most modern HVAC ERP systems support integration with popular accounting software (e.g., QuickBooks, Xero) and CRM tools (e.g., Salesforce). These integrations ensure seamless data sharing, reducing manual data entry and errors."
    },
    { 
        question: "What features should I look for in an HVAC ERP system?", 
        answer: "Real-time tracking of service requests and technician locations.Inventory management to monitor HVAC parts and supplies.Auto-invoicing and billing for faster payment processing.Comprehensive reporting for insights into business performance."
    }
];

// Reference to the FAQ section in the HTML
const faqSection = document.getElementById('faq-section');

// Generate FAQ items dynamically
faqs.forEach(faq => {
    // Create the details element
    const details = document.createElement('details');
    
    // Create the summary element (question)
    const summary = document.createElement('summary');
    summary.textContent = faq.question;

    // Create the div element for the answer
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.textContent = faq.answer;

    
    details.appendChild(summary);
    details.appendChild(answerDiv);
    faqSection.appendChild(details);
});

// Ensure only one question is open at a time
const detailsElements = faqSection.querySelectorAll('details');
detailsElements.forEach(detail => {
    detail.addEventListener('toggle', function () {
        if (this.open) {
            detailsElements.forEach(otherDetail => {
                if (otherDetail !== this && otherDetail.open) {
                    otherDetail.open = false;
                }
            });
        }
    });
});




