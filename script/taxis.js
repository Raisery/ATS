async function getProfilsData() {
    const profils = await fetch("data/profils.json")
        .then(response => {
            return response.json();
        })
    console.log(profils)
    return profils
}

function getProfilUI(profil) {
    const card = document.createElement("div");
    card.classList.add('card-profil');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card-profil__img');
    const photo = document.createElement("img");
    photo.setAttribute("src", `./images/profils/${profil.id}/ensemble.jpg`);
    const header = document.createElement("div");
    header.classList.add('card-profil__header');
    const name = document.createElement("p");
    name.classList.add('card-profil__header__name');
    name.textContent = `${profil.prenom} ${profil.nom}`;
    const num = document.createElement("p");
    num.classList.add('card-profil__header__num');
    num.textContent = profil.id

    imgContainer.appendChild(photo);
    card.appendChild(imgContainer);
    header.appendChild(name);
    header.appendChild(num);
    card.appendChild(header);
    card.addEventListener('click', e => {
        router("profil", profil.id)
    })
    return card
}

async function displayProfils() {
    const section = document.querySelector(".profils-container");
    const profils = await getProfilsData();
    for (let profil of profils) {
        section.appendChild(getProfilUI(profil))
    }
}

displayProfils()