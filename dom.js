// In your JavaScript, use querySelector to get a reference to the main tag and save it in a variable named main.
const main = document.querySelector('main');

// Look up three good jokes and store them as separate variables in your JavaScript.
const firstJoke = "Why do we tell actors to 'break a leg'? Because every play has a cast.";
const secondJoke = "Did you hear about the claustrophobic astronaut? He just needed a little space.";
const thirdJoke = "Why don't scientists trust atoms? Because they make up everything.";

// Define an HTML template with a template string. Make a heading for your template that says "My Jokes" and make a list of your three jokes, inserting the variables as items in the list.
const template = `
<h1>My Jokes</h1>

<ul>
    <li>${firstJoke}</li>
    <li>${secondJoke}</li>
    <li>${thirdJoke}</li>
</ul>
`;

// Put the template inside the main tag.
main.innerHTML = template;

// Make a paragraph tag with the document.createElement method and save it to a variable.
const p = document.createElement('p');

// Add the text "That's all folks!" as text content to the newly created paragraph tag.
p.textContent = "That's all folks!";

// Append the paragraph tag to the body tag of your HTML page.
main.appendChild(p);
