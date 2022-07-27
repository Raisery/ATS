const ROUTES = [
    {
        path: "taxis.html",
        name: "taxis"
    }
]

function router(target) {
    const route = ROUTES.find(r => r.name == target )
    if(!route) return document.body.innerHTML = `<h1>ERREUR 404</h1>`;
    window.location.href = route.path;
}