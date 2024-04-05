function example() {
    const books = ["Personal", "Development"];
    const fruits = ["Apple", "Pineapple"];
    let out = "";

    // Extraction
    const [action, comedy] = books;
    out += `<h1>Extraction: ${action}</h1>`;
    out += `<h1>Extraction: ${comedy}</h1>`;

    // Spread operator
    const others = [...books, ...fruits];

    // forEach function
    others.forEach(item => {
        out += `<h1>Data: ${item}</h1>`;
    });

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);