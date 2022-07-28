const ROUTES = [
    {
        path: "taxis.html",
        name: "taxis"
    },
    {
        path: "index.html",
        name: "accueil"
    }
]

function router(target) {
    const route = ROUTES.find(r => r.name == target )
    if(!route) window.location.href = "not_found.html";
    window.location.href = route.path;
}