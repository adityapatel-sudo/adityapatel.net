
// Reference to the text container
var meDescription = document.getElementById("intro_description_1");
var meDescriptiontext = 'I\'m interested in Software Development and Machine Intelligence! I\'m currently looking for internships in Computer Science and related fields for Summer 2024.\n';

// Function to simulate typing effect
function typeWriter(text, i, container, oncomplete) {
    if (i < text.length) {
        container.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i,meDescription, oncomplete);
        }, 10);
    } else {
        container.innerHTML = 'I\'m interested in <span class="important_text">Software Development</span> and <span class="important_text">Machine Intelligence</span>! I\'m currently looking for internships in Computer Science and related fields for Summer 2024.\n'
    }
}
function onDescComplete(){
}

// Call the typing function
typeWriter(meDescriptiontext, 0, meDescription, onDescComplete());