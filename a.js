// Sample data - in a real application, this would come from a database or API
const interns = {
    SMI74615: {
      name: "Supradeep Tripurari",
      domain: "Full Stack Web Development Internship",
      batch: "December 21, 2023 to January 09, 2024",
      status: "Completed",
    },
    SMI74619: {
      name: "Gangavaram Sri Vathsava Naidu",
      domain: "Full Stack Web Development Internship",
      batch: "December 21, 2023 to January 09, 2024",
      status: "Completed",
    },
  };
  
  // Function to get the query parameter from the URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Main function to load dynamic content
  function loadInternDetails() {
    // Get the internID from the URL
    const internID = getQueryParam("internID");
  
    // Check if the internID exists in the database
    if (internID && interns[internID]) {
      const intern = interns[internID];
  
      // Generate the HTML content for the intern details
      const internHTML = `
        <div class="info-card">
          <h3>Intern Details</h3>
          <p><strong>Name:</strong> ${intern.name}</p>
          <p><strong>InternID:</strong> ${internID}</p>
          <p><strong>Domain:</strong> ${intern.domain}</p>
          <p><strong>Batch:</strong> ${intern.batch}</p>
          <p><strong>Internship Status:</strong> ${intern.status}</p>
        </div>
      `;
  
      // Inject the HTML into the div with class="intern-details text-center"
      const internDetailsDiv = document.querySelector(".intern-details.text-center");
      if (internDetailsDiv) {
        internDetailsDiv.innerHTML = internHTML;
      }
      alert("Verification successful!");
      // Show success message
      //alert(`Verification successful for Intern ID: ${internID}`);
    } else {
      // Handle invalid or missing internID
      alert("Invalid or missing Intern ID.");
      const internDetailsDiv = document.querySelector(".intern-details.text-center");
      if (internDetailsDiv) {
        internDetailsDiv.innerHTML = "<p>No details found for the provided Intern ID.</p>";
      }
    }
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", loadInternDetails);
