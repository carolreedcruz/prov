// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
	// API funkade
	return response.json();
}).then(function (data) {
	// JSON fil från res
	console.log(data);
}).catch(function (err) {
	// Error..
	console.warn('Something went wrong.', err);
});

// jag har inte hunnit med json och fetch och sånt blir svårt, men ska ta igen och komplettera sen innan react kursen... plus att jag har kvar radioplayer/faq uppgiften.

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId


// jag har inte hunnit med json och fetch och sånt blir svårt