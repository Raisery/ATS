const ROUTES = [
    {
        path: "taxis.html",
        name: "taxis"
    },
    {
        path: "index.html",
        name: "accueil"
    },
    {
        path: "profil.html",
        name: "profil"
    }
]

function router(target, id = null) {
    const route = ROUTES.find(r => r.name == target )
    if(!route) window.location.href = "not_found.html";
    if(id) {
        window.location.href = `${route.path}?id=${id}`;
        return
    }
    window.location.href = route.path;
}