// Set German as the default language on page load
document.addEventListener("DOMContentLoaded", () => {
    toggleLanguage('de'); // Initialize language to German

    // Set up Intersection Observer for section visibility
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach((section) => observer.observe(section));
});


let currentLang;

function toggleLanguage(lang) {

    //currentLang = 'de';
    currentLang = lang;  // Store the selected language globally

    // Move the toggle indicator
    const toggleIndicator = document.querySelector(".language-toggle .toggle-indicator");
    if (lang === 'de') {
        toggleIndicator.style.transform = "translateX(0)";
    } else {
        toggleIndicator.style.transform = "translateX(100%)";
    }

    // Modify the active class of the buttons
    const germanButton = document.getElementById("german");
    const englishButton = document.getElementById("english");

    if (lang === 'de') {
        germanButton.classList.add("active");
        englishButton.classList.remove("active");
    } else if (lang === 'en') {
        englishButton.classList.add("active");
        germanButton.classList.remove("active");
    }

    // Update the lang attribute in the HTML
    document.documentElement.lang = lang;

    // Existing content updates
    const germanContent = {
        heroTitle: "Berechnungsingenieur",
        heroSubtitle: "Fahrzeugsicherheit | Passive Sicherheit | FEM- & Crash-Simulationen",
        aboutTitle: "Über mich",
        aboutText: loadAboutMeContent(),
        skillsTitle: "Fähigkeiten",
        contactTitle: "Kontakt",
        contactContent: `<style>
                            .contact-table {
                                table-layout: fixed; 
                                width: 60%;
                                border-collapse: collapse; /* Remove extra spaces between cells */
                                margin: 0 auto; /* Center the table horizontally */
                            }
                            .contact-table td {
                                padding: 8px; /* Add spacing around text */
                                vertical-align: top; /* Align text at the top */
                                /* border: 1px solid #ccc; /* Add border around each cell */ */
                                word-wrap: break-word; /* Allow long words to break to the next line */
                                white-space: normal; /* Ensure the text wraps within the cell */
                                overflow-wrap: break-word; /* Allow the content to break and prevent overflow */
                            }
                            .contact-table td:first-child {
                                width: 20%; /* Ensure the left column (labels) doesn't take too much space */
                                text-align: justify; /* Align text to the left */
                            }
                            .contact-table td:last-child {
                                width: 80%; /* Allow the right column (content) to take more space */
                                text-align: justify; /* Justify text in the second column */
                            }
                            .contact-table strong {
                                display: inline-block; /* Inline-block for consistent spacing */
                                min-width: 150px; /* Optional: Set a minimum width for labels */
                            }
                        </style>
                        <table class="contact-table">
                            <tr>
                                <td><strong>E-Mail:</strong></td>
                                <td><a href="mailto:venkatasrikantharyasomayajula@gmail.com">venkatasrikantharyasomayajula@gmail.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Telefon:</strong></td>
                                <td>+49 159 06474204</td>
                            </tr>
                            <tr>
                                <td><strong>LinkedIn:</strong></td>
                                <td><a href="https://www.linkedin.com/in/venkatasrikantharyasomayajula/" target="_blank">Srikanth - LinkedIn</a></td>
                            </tr>
                            <tr>
                                <td><strong>Xing:</strong></td>
                                <td><a href="https://www.xing.com/profile/VenkataSrikanth_Aryasomayajula/" target="_blank">Srikanth - Xing</a></td>
                            </tr>
                            <tr>
                                <td><strong>Anschrift:</strong></td>
                                <td>71229 Leonberg, Deutschland</td>
                            </tr>                            
                        </table>`,
        floatingNoteText: "- Switch to English if you prefer<br>- Die Boxen auf der rechten Seite der Webseite sind clickable",
    };
    const englishContent = {
        heroTitle: "CAE Engineer",
        heroSubtitle: "Vehicle Safety | Passive Safety | FEM & Crash Simulations",
        aboutTitle: "About Me",
        aboutText: loadAboutMeContent(),
        skillsTitle: "Skills",
        contactTitle: "Contact",
        contactContent: `<style>
                            .contact-table {
                                table-layout: fixed; 
                                width: 60%;
                                border-collapse: collapse; /* Remove extra spaces between cells */
                                margin: 0 auto; /* Center the table horizontally */
                            }
                            .contact-table td {
                                padding: 8px; /* Add spacing around text */
                                vertical-align: top; /* Align text at the top */
                                /* border: 1px solid #ccc; /* Add border around each cell */ */
                                word-wrap: break-word; /* Allow long words to break to the next line */
                                white-space: normal; /* Ensure the text wraps within the cell */
                                overflow-wrap: break-word; /* Allow the content to break and prevent overflow */
                            }
                            .contact-table td:first-child {
                                width: 20%; /* Ensure the left column (labels) doesn't take too much space */
                                text-align: justify; /* Align text to the left */
                            }
                            .contact-table td:last-child {
                                width: 80%; /* Allow the right column (content) to take more space */
                                text-align: justify; /* Justify text in the second column */
                            }
                            .contact-table strong {
                                display: inline-block; /* Inline-block for consistent spacing */
                                min-width: 150px; /* Optional: Set a minimum width for labels */
                            }
                        </style>
                        <table class="contact-table">
                            <tr>
                                <td><strong>E-Mail:</strong></td>
                                <td><a href="mailto:venkatasrikantharyasomayajula@gmail.com">venkatasrikantharyasomayajula@gmail.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Phone:</strong></td>
                                <td>+49 159 06474204</td>
                            </tr>
                            <tr>
                                <td><strong>LinkedIn:</strong></td>
                                <td><a href="https://www.linkedin.com/in/venkatasrikantharyasomayajula/" target="_blank">Srikanth - LinkedIn</a></td>
                            </tr>
                            <tr>
                                <td><strong>Xing:</strong></td>
                                <td><a href="https://www.xing.com/profile/VenkataSrikanth_Aryasomayajula/" target="_blank">Srikanth - Xing</a></td>
                            </tr>
                            <tr>
                                <td><strong>Address:</strong></td>
                                <td>71229 Leonberg, Germany</td>
                            </tr>
                        </table>`,
        floatingNoteText: "- Switch to German if you prefer<br>- The boxes on the right side of the webpage are clickable",
    };

    const content = lang === 'de' ? germanContent : englishContent;

    const menuItems = lang === 'de'
        ? { about: "Über mich", skills: "Fähigkeiten", experiences: "Berufserfahrung", education: "Ausbildung", certificates: "Zeugnisse", contact: "Kontakt" }
        : { about: "About Me", skills: "Skills", experiences: "Professional Experience", education: "Education", certificates: "Certificates", contact: "Contact" };

    // Update Menu Items
    document.getElementById("menu-about").textContent = menuItems.about;
    document.getElementById("menu-skills").textContent = menuItems.skills;
    document.getElementById("menu-experiences").textContent = menuItems.experiences;
    document.getElementById("menu-education").textContent = menuItems.education;
    document.getElementById("menu-certificates").textContent = menuItems.certificates;
    document.getElementById("menu-contact").textContent = menuItems.contact;

    // Update Hero Section
    document.querySelector(".hero h1").textContent = content.heroTitle;
    document.querySelector(".hero p").textContent = content.heroSubtitle;

    // Update About Section
    document.querySelector("#about h2").textContent = content.aboutTitle;

    // Update Skills Section
    document.querySelector("#skills h2").textContent = content.skillsTitle;

    // Update Experiences Section
    document.querySelector("#experiences h2").textContent = menuItems.experiences;
	
	// Update Education Section
    document.querySelector("#education h2").textContent = menuItems.education;

    // Update Certificates Section
    document.querySelector("#certificates h2").textContent = menuItems.certificates;

    // Update Contact Section
    document.querySelector("#contact h2").textContent = content.contactTitle;
    document.querySelector("#contact-content").innerHTML = content.contactContent;

    // Create an object for the experience titles based on language
    const experienceTitles = lang === 'de'
        ? { experience1: "Berechnungsingenieur - Fahrzeugsicherheit", experience2: "CAE Trainee (Crash-Simulationen) - Sitzsystem", experience3: "Masterand: FEM-Simulation und Materialmodellierung", experience4: "Mini-Projekt und studentische Hilfskraft", experience5: "Senior Design Engineer" }
        : { experience1: "CAE Engineer", experience2: "CAE Trainee (Crash simulations) - Seating System", experience3: "Master Thesis: FEM Simulation & material modelling", experience4: "Mini-thesis & student assistant", experience5: "Senior Design Engineer" };

    // Update the job titles in experiences section
    Object.keys(experienceTitles).forEach(experienceId => {
        const experienceElement = document.querySelector(`[data-page-id="${experienceId}"]`);
        if (experienceElement) {
            experienceElement.querySelector("h3").textContent = experienceTitles[experienceId];
        }
    });

    // Create an object for company names and locations based on language
    const experienceDetails = lang === 'de' ? {
        experience1: { company: "Kube GmbH Ingenieurbüro", location: "Weissach" },
        experience2: { company: "ELENO-ELC", location: "Pune" },
        experience3: { company: "Kautex Textron GmbH", location: "Bonn" },
        experience4: { company: "Institut für Strukturmechanik und Leichtbau (SLA)", location: "RWTH Aachen" },
        experience5: { company: "L&T Defense", location: "Visakhapatnam" }
    } : {
        experience1: { company: "Kube GmbH Ingenieurbüro", location: "Weissach" },
        experience2: { company: "ELENO-ELC", location: "Pune" },
        experience3: { company: "Kautex Textron GmbH", location: "Bonn" },
        experience4: { company: "Institute of Structural Mechanics & Lightweight Design (SLA)", location: "RWTH Aachen" },
        experience5: { company: "L&T Defense", location: "Visakhapatnam" }
    };

    // Update the company and location in experiences section
    Object.keys(experienceDetails).forEach(experienceId => {
        const experienceElement = document.querySelector(`[data-page-id="${experienceId}"]`);
        if (experienceElement) {
            const companyNameElement = experienceElement.querySelector(".company-name");
            const locationElement = experienceElement.querySelector(".location");
            if (companyNameElement && locationElement) {
                companyNameElement.textContent = experienceDetails[experienceId].company;
                locationElement.textContent = experienceDetails[experienceId].location;
            }
        }
    });
	
	// Create an object for the education titles based on language
    const educationTitles = lang === 'de'
        ? { education1: "M.Sc. CAME (Computer Aided Mechanical Engineering)", education2: "B.Tech. Maschinenbau"}
        : { education1: "M.Sc. CAME (Computer Aided Mechanical Engineering)", education2: "B.Tech. Mechanical Engineering"};

    // Update the job titles in education section
    Object.keys(educationTitles).forEach(educationId => {
        const educationElement = document.querySelector(`[data-page-id="${educationId}"]`);
        if (educationElement) {
            educationElement.querySelector("h3").textContent = educationTitles[educationId];
        }
    });

    // Create an object for university names and locations based on language
    const educationDetails = lang === 'de' ? {
        education1: { company: "RWTH Aachen", location: "Aachen" },
        education2: { company: "GMR Institute of Technology", location: "Rajam" }
    } : {
        education1: { company: "RWTH Aachen", location: "Aachen" },
        education2: { company: "GMR Institute of Technology", location: "Rajam" }
    };

    // Update the company and location in experiences section
    Object.keys(educationDetails).forEach(educationId => {
        const educationElement = document.querySelector(`[data-page-id="${educationId}"]`);
        if (educationElement) {
            const companyNameElement = educationElement.querySelector(".company-name");
            const locationElement = educationElement.querySelector(".location");
            if (companyNameElement && locationElement) {
                companyNameElement.textContent = educationDetails[educationId].company;
                locationElement.textContent = educationDetails[educationId].location;
            }
        }
    });

    // Update the Floating Note
    const floatingNote = document.getElementById("floating-note");
    if (floatingNote) {
        floatingNote.innerHTML = content.floatingNoteText;
    }

    // Mapping of specific terms in German and English
    const terms = {
        "CAE Software-Kenntnisse": { "de": "CAE Software-Kenntnisse", "en": "CAE Software" },
        "CAD Software-Kenntnisse": { "de": "CAD Software-Kenntnisse", "en": "CAD Software" },
        "Programm.-Kenntnisse u. Sonst.": { "de": "Programm.-Kenntnisse u. Sonst.", "en": "Programming and others" },
		"Teamsfähigkeit": { "de": "Teamsfähigkeit", "en": "Team Player" },
		"Strukturierte Arbeitsweise": { "de": "Strukturierte Arbeitsweise", "en": "Structured Approach" },
		"Kommunikationsfähigkeit": { "de": "Kommunikationsfähigkeit", "en": "Communication Skills" },
		"Technikbegeisterung": { "de": "Technikbegeisterung", "en": "Technology Enthusiasm" },
        "Sprachen": { "de": "Sprachen", "en": "Languages" },
        "Deutsch": { "de": "Deutsch", "en": "German" },
        "Englisch": { "de": "Englisch", "en": "English" },
        "Klicken Sie auf die Boxen unten": { "de": "Klicken Sie auf die Boxen unten", "en": "Click on the boxes below" },
		"bis": { "de": "bis", "en": "to" },
		"März": { "de": "März", "en": "Mar." },
		"Mai": { "de": "Mai", "en": "May" },
		"Okt.": { "de": "Okt.", "en": "Oct." },
        "Dez.": { "de": "Dez.", "en": "Dec." },
        "Arbeitszeugnis": { "de": "Arbeitszeugnis", "en": "Experience-Certificate" },
		"Alle": { "de": "Alle", "en": "All" },
		"Rechte": { "de": "Rechte", "en": "rights" },
		"vorbehalten": { "de": "vorbehalten", "en": "reserved" }

    };

	// Iterate through all text nodes and replace the terms
    const walkAndTranslate = (node) => {
        // Skip the floating note element
        if (node.id === "floating-note") {
            return;  // Exit the function if the floating note is encountered
        }
		// If the node is a text node, check and replace the term
		if (node.nodeType === Node.TEXT_NODE) {
			let textContent = node.textContent;
	
			// Replace each term with its translation
			Object.keys(terms).forEach(term => {
				const translation = terms[term][currentLang]; // Get the translation for the current language
				const reverseTranslation = terms[term][currentLang === 'de' ? 'en' : 'de']; // Get the reverse translation
				
				// Replace both forward and reverse
				textContent = textContent.replace(new RegExp(`(^|\\s|\\b)${term}(\\b|\\s|\\.|,|$)`, 'gu'), `$1${translation}$2`);
				textContent = textContent.replace(new RegExp(`(^|\\s|\\b)${reverseTranslation}(\\b|\\s|\\.|,|$)`, 'gu'), `$1${translation}$2`);
				
			});
	
			node.textContent = textContent;  // Update the text content with the translated version
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			// Recursively handle child nodes
			node.childNodes.forEach(walkAndTranslate);
		}
	};
	
	// Start walking the DOM tree from the body element
	walkAndTranslate(document.body);

    return lang;
}

function createStarRating(elementId, rating) {
    // Get the target element
    const el = document.getElementById(elementId);

    // Validate rating input
    rating = parseFloat(rating);
    if (isNaN(rating) || rating < 0 || rating > 5) {
        console.error('Invalid rating. Must be a number between 0 and 5.');
        return;
    }

    // Create star rating container
    const starContainer = document.createElement('div');
    starContainer.className = 'star-rating';

    // Create 5 stars
    for (let i = 1; i <= 5; i++) {
        // Base star
        const starBase = document.createElement('span');
        starBase.className = 'star';
        starBase.innerHTML = '★';

        // If rating is a whole number and current star is filled
        if (i <= Math.floor(rating)) {
            starBase.classList.add('filled');
        }

        // Create overlay for partial stars
        if (i > Math.floor(rating) && i - 1 < rating) {
            const starOverlay = document.createElement('span');
            starOverlay.className = 'star star-overlay';
            starOverlay.innerHTML = '★';

            // Calculate width of partial star
            const partialWidth = (rating % 1) * 100;
            starOverlay.style.width = `${partialWidth}%`;

            // Wrap base star with positioning context
            const starWrapper = document.createElement('span');
            starWrapper.style.position = 'relative';
            starWrapper.style.display = 'inline-block';

            starWrapper.appendChild(starBase);
            starWrapper.appendChild(starOverlay);

            starContainer.appendChild(starWrapper);
        } else {
            starContainer.appendChild(starBase);
        }
    }

    // Replace 'Star rating' text with star container
    el.innerHTML = '';
    el.appendChild(starContainer);
}

// Call the function for each skill when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStarRating('ls-dyna-rating', 4);
    createStarRating('ls-prepost-rating', 3);
    createStarRating('ansa-rating', 3);
    createStarRating('hypermesh-rating', 3);
    createStarRating('animator-rating', 3);
    createStarRating('meta-rating', 2);
    createStarRating('loco-rating', 2);
    createStarRating('abaqus-rating', 2.5);
    createStarRating('ansys-rating', 2.5);
    createStarRating('primer-rating', 1);

    createStarRating('catia-rating', 3);
    createStarRating('proe-rating', 2.5);
    createStarRating('autocad-rating', 4);

    createStarRating('python-rating', 3);
    createStarRating('java-rating', 1);
    createStarRating('msoffice-rating', 4);

    createStarRating('softskill-1-rating', 4);
    createStarRating('softskill-2-rating', 4);
    createStarRating('softskill-3-rating', 4);
    createStarRating('softskill-4-rating', 4);

    createStarRating('german-rating', 2.5);
    createStarRating('english-rating', 4);
    createStarRating('telugu-rating', 4);
    createStarRating('hindi-rating', 4);

});

function openExperience(element) {
    const lang = currentLang;  // Use the global language variable instead of detecting it from the DOM
    const pageId = element.getAttribute("data-page-id"); // Get the unique ID for the experience

    // Get the body element
    const body = document.body;

    // Create the background overlay
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('experience-overlay-background');

    // Add the background overlay to the body
    document.body.appendChild(backgroundOverlay);

    // Create the content overlay container for the experience page
    const overlay = document.createElement('div');
    overlay.classList.add('experience-overlay');

    // Add the overlay to the body
    document.body.appendChild(overlay);

    // Dynamically set the overlay color based on the current theme
    if (body.classList.contains('dark-mode')) {
        overlay.style.backgroundColor = '#636363';
        overlay.style.color = '#ffffff';
    } else {
        overlay.style.backgroundColor = '#cad2c5';
        overlay.style.color = '#000000';
    }

    // Load the page content into the overlay container
    const pageUrl = `${pageId}-${lang}.html`; // Construct the URL for the experience page

    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Insert the content from the experience page into the overlay
            overlay.innerHTML = html;

            // Activate the experience overlay page
            overlay.classList.add('active');

            // Dynamically style buttons with the class "subject-box" and "new-page"
            const subjectBoxes = overlay.querySelectorAll('.subject-box, .new-page');
            subjectBoxes.forEach(subjectBox => {
                if (body.classList.contains('dark-mode')) {
                    subjectBox.style.backgroundColor = '#404040';
                    subjectBox.style.color = '#ffffff';
                    subjectBox.style.fontWeight = 'bold';
                } else {
                    subjectBox.style.backgroundColor = '#52796f'; 
                    subjectBox.style.color = '#ffffff';
                    subjectBox.style.fontWeight = 'bold';
                }
            });

            // Ensure the back button exists
            const backButton = overlay.querySelector('.new-page');
            if (backButton) {
                backButton.addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent default link behavior

                    // Remove overlays
                    if (backgroundOverlay) document.body.removeChild(backgroundOverlay);
                    if (overlay) document.body.removeChild(overlay);

                    // Optionally navigate to the index page
                    //window.location.href = "index.html";
                });
            } else {
                console.error('Back button not found in loaded content.');
            }
        })
        .catch(error => {
            console.error('Error loading experience page:', error);
            overlay.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        });

    // Add a global click event listener to close the overlay when clicking outside
    document.addEventListener('click', function handleOutsideClick(event) {
        if (
            !overlay.contains(event.target) && // Click is outside the overlay
            !element.contains(event.target) // Click is outside the triggering element
        ) {
            closeOverlay(backgroundOverlay, overlay); // Close the overlay
            document.removeEventListener('click', handleOutsideClick); // Clean up listener
        }
    });
}

// Function to close the overlay
function closeOverlay(backgroundOverlay, overlay) {
    if (backgroundOverlay) document.body.removeChild(backgroundOverlay);
    if (overlay) document.body.removeChild(overlay);
}

// Function to load content based on language and display it directly
function loadAboutMeContent() {
    const lang = currentLang; // Use the global language variable instead of detecting it from the DOM

	const aboutMeDiv = document.querySelector('.about-me');
    
    // Determine the correct page URL based on the language
    const pageUrl = lang === 'de' ? 'aboutMeDe.html' : 'aboutMeEn.html';

    // Fetch the content from the chosen HTML file
    fetch(pageUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        // Insert the content directly into the .about-me div
        aboutMeDiv.innerHTML = html;
        /*
        // Force CSS to reapply by adding/removing a class
        aboutMeDiv.classList.add('styled');
        setTimeout(() => aboutMeDiv.classList.remove('styled'), 0); */
    })
    .catch(error => {
        console.error('Error loading About Me content:', error);
        aboutMeDiv.innerHTML = `<p>Error loading content. Please try again later.</p>`;
    });
}


function openCertificate(element) {
    const fileId = element.getAttribute("data-page-id"); // Unique ID for the certificate
    const fileUrl = `${fileId}.pdf`; 

    // Create the background overlay
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('certificate-overlay-background');

    // Add the background overlay to the body
    document.body.appendChild(backgroundOverlay);

    // Create the content overlay container
    const overlay = document.createElement('div');
    overlay.classList.add('certificate-overlay');

    // Add the overlay to the body
    document.body.appendChild(overlay);

    // Create an iframe for the PDF or image display
    const fileViewer = document.createElement('iframe');
    fileViewer.src = fileUrl;
    fileViewer.classList.add('certificate-viewer');
    fileViewer.setAttribute('frameborder', '0');
    fileViewer.setAttribute('allowfullscreen', 'true');

    // Append the viewer to the overlay
    overlay.appendChild(fileViewer);

    // Create the back button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('back-button');
    backButton.addEventListener('click', function () {
        // Remove the overlay and background
        if (backgroundOverlay) document.body.removeChild(backgroundOverlay);
        if (overlay) document.body.removeChild(overlay);
    });

    // Create the download button
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.classList.add('download-button');
    downloadButton.addEventListener('click', function () {
        // Trigger download of the file
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = `${fileId}.pdf`; // Adjust file name if necessary
        downloadLink.click();
    });

    // Add the buttons to the overlay
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(downloadButton);
    overlay.appendChild(buttonContainer);

    // Add a global click event listener to close the overlay when clicking outside
    document.addEventListener('click', function handleOutsideClick(event) {
        if (
            !overlay.contains(event.target) && // Click is outside the overlay
            !element.contains(event.target) // Click is outside the triggering element
        ) {
            closeOverlay(backgroundOverlay, overlay); // Close the overlay
            document.removeEventListener('click', handleOutsideClick); // Clean up listener
        }
    });    
}

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        scrollToTopBtn.classList.add('visible');
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/*const floatingNote = document.querySelector('.floating-note');

// Show or hide the note based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        floatingNote.classList.add('visible');
        floatingNote.classList.remove('hidden');
    } else {
        floatingNote.classList.add('hidden');
        floatingNote.classList.remove('visible');
    }
});

*/
// Function for Back button in experiences and education
function backButtonLangToEn() {
    toggleLanguage('en');
}

// Function for Menu-toggle which is visible in mobile version but not in the web version
let menuClickCount = 0;

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
    const menu = document.querySelector('header nav ul');
    event.stopPropagation(); // Prevent this click from immediately closing the menu

    menuClickCount++;

    if (menuClickCount % 2 === 1) {
        // Odd clicks (1st, 3rd, 5th...) - Open menu
        menu.style.display = "block";
        menu.classList.add('active');

        menu.style.maxHeight = menu.scrollHeight * 1.2 + "px"; //1.2 is multiplied because the scrollHeight of the menu was not sufficient
        menu.style.display = ""; // Reset to original state
    } else {
        // Even clicks (2nd, 4th, 6th...) - Close menu
        menu.classList.remove('active');
        menu.style.maxHeight = "0";
    }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('header nav ul');
    const menuToggle = document.querySelector('.menu-toggle');

    // Check if menu is active and the click is outside both menu and toggle button
    if (menu.classList.contains('active') &&
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
        menu.style.maxHeight = "0";
        menuClickCount = 0; // Reset click count
    }
});

// Close menu after clicking any menu item
document.querySelectorAll('header nav ul li a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const menu = document.querySelector('header nav ul');

        // Close the menu
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.style.maxHeight = "0";
            menuClickCount = 0; // Reset click count
        }
    });
});


// Light and dark mode switch
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.querySelector('.mode-toggle');
    const lightButton = modeToggle.querySelector('.light-button');
    const darkButton = modeToggle.querySelector('.dark-button');
    const toggleIndicator = modeToggle.querySelector('.toggle-indicator');
    const languageToggle = document.querySelector('.language-toggle');
    const body = document.body;
    const logo = document.querySelector('header .logo'); // Select the logo element

    // Select elements to change styles
    const header = document.querySelector('header');
    const experiences = document.querySelector('.experiences'); 
    const leftColumn = document.querySelector('.left-column'); 
    const rightColumn = document.querySelector('.right-column'); 
    const topHero = document.querySelector('.hero'); 
    const titleBox = document.querySelector('.title'); 
    const aboutMe = document.querySelector('.about-me');
    const photoFrame = document.querySelector('.photo-frame');
    const contact = document.querySelector('.contact');
    const footer = document.querySelector('.full-width');
    

    // Function to apply light mode styles
    const applyLightMode = () => {
        body.classList.remove('dark-mode');
        body.style.backgroundColor = '#cad2c5';//'#cad2c5';
        body.style.color = '#000000';
        modeToggle.style.backgroundColor = '#153243';
        languageToggle.style.backgroundColor = '#153243';
        header.style.backgroundColor = '#84a98c'; 
        logo.style.color = '#ffffff';
        logo.style.fontWeight = 'bold';
        topHero.style.backgroundColor = '#cad2c5';
        titleBox.style.color = '#2c3e50';
        aboutMe.style.color = '#ffffff';
        aboutMe.style.backgroundColor = '#153243';
        photoFrame.style.backgroundColor = '#997950';/*'#d5c5b2';*/

        document.querySelectorAll('.timeline-date').forEach(timelineDate => {
            timelineDate.style.color = '#ffffff';
            timelineDate.style.fontWeight = 'bold';
        });

        document.querySelectorAll('.timeline-line').forEach(timelineLine => {
            timelineLine.style.color = '#000000'; 
        });

        leftColumn.style.backgroundColor = '#52796f';

        document.querySelectorAll('.menu-box').forEach(menuBox => {
            menuBox.style.backgroundColor = '#153243'; 
            menuBox.style.fontWeight = 'bold';
        });
        experiences.style.backgroundColor = '#84a98c';

        document.querySelectorAll('.experience').forEach(experience => {
            experience.style.backgroundColor = '#153243';
        });

        document.querySelectorAll('.timeline-box').forEach(timelineBox => {
            timelineBox.style.backgroundColor = '#153243';
            timelineBox.style.color = '#000000';
        });

        document.querySelectorAll('.certificate-box').forEach(certificate => {
            certificate.style.backgroundColor = '#153243';
        });

        document.querySelectorAll('.skill').forEach(skillBox => {
            skillBox.style.backgroundColor = '#153243'; 
            skillBox.style.color = '#ffffff';
        });

        document.querySelectorAll('.section h2').forEach(sectionH2 => {
            sectionH2.style.color = '#ffffff';
        });

        document.querySelectorAll('.section h3').forEach(sectionH3 => {
            sectionH3.style.color = '#ffffff';
        });

        rightColumn.style.backgroundColor = '#84a98c';
        contact.style.backgroundColor = '#153243';
        contact.style.color = '#ffffff';
        footer.style.backgroundColor = '#84a98c';
        footer.style.color = '#ffffff';
        
        lightButton.classList.add('active');
        darkButton.classList.remove('active');
        toggleIndicator.style.transform = 'translateX(0)';
    };

    // Function to apply dark mode styles
    const applyDarkMode = () => {
        body.classList.add('dark-mode');
        body.style.backgroundColor = '#636363';
        body.style.color = '#000000';
        modeToggle.style.backgroundColor = '#153243';
        languageToggle.style.backgroundColor = '#153243';

        header.style.backgroundColor = '#021526'; 
        logo.style.color = '#ffffff';
        logo.style.fontWeight = 'bold';
        topHero.style.backgroundColor = '#636363';
        titleBox.style.color = '#ffffff';
        aboutMe.style.color = '#ffffff';
        aboutMe.style.backgroundColor = '#1e453e';
        photoFrame.style.backgroundColor = '#d5c5b2';
        
        document.querySelectorAll('.timeline-date').forEach(timelineDate => {
            timelineDate.style.color = '#ffffff';
            timelineDate.style.fontWeight = 'bold';
        });

        document.querySelectorAll('.timeline-line').forEach(timelineLine => {
            timelineLine.style.color = '#000000'; 
        });

        leftColumn.style.backgroundColor = '#222222';

        document.querySelectorAll('.menu-box').forEach(menuBox => {
            menuBox.style.backgroundColor = '#636363'; 
            menuBox.style.fontWeight = 'bold';
        });
        experiences.style.backgroundColor = '#021526';

        document.querySelectorAll('.experience').forEach(experience => {
            experience.style.backgroundColor = '#1e453e';
        });

        document.querySelectorAll('.certificate-box').forEach(certificate => {
            certificate.style.backgroundColor = '#1e453e';
        });

        document.querySelectorAll('.timeline-box').forEach(timelineBox => {
            timelineBox.style.backgroundColor = '#1e453e'; 
            timelineBox.style.color = '#000000';
        });

        document.querySelectorAll('.skill').forEach(skillBox => {
            skillBox.style.backgroundColor = '#1e453e'; 
            skillBox.style.color = '#ffffff';
        });

        document.querySelectorAll('.section h2').forEach(sectionH2 => {
            sectionH2.style.color = '#ffffff';
        });

        document.querySelectorAll('.section h3').forEach(sectionH3 => {
            sectionH3.style.color = '#ffffff';
        });

        rightColumn.style.backgroundColor = '#021526';
        contact.style.backgroundColor = '#1e453e';
        contact.style.color = '#ffffff';
        footer.style.backgroundColor = '#021526';
        footer.style.color = '#ffffff';

        darkButton.classList.add('active');
        lightButton.classList.remove('active');
        toggleIndicator.style.transform = 'translateX(100%)';
    };

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem('theme') || 'light';
    if (savedMode === 'dark') {
        applyDarkMode(); // Set dark mode if saved
    } else {
        applyLightMode(); // Default to light mode
    }

    // Light Mode Activation
    lightButton.addEventListener('click', () => {
        if (!lightButton.classList.contains('active')) {
            applyLightMode();
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });

    // Dark Mode Activation
    darkButton.addEventListener('click', () => {
        if (!darkButton.classList.contains('active')) {
            applyDarkMode();
            localStorage.setItem('theme', 'dark'); // Save preference
        }
    });
});
