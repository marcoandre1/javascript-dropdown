let list = ["abandonner", "accepter", "accompagner", "acheter", "adorer",
"agir",	"aider", "aimer", "aller", "amener",
"amuser", "appartenir", "appeler", "apporter", "apprendre",
"approcher", "apprécier", "arranger", "arriver", "arrêter",
"asseoir", "assurer", "attaquer", "attendre", "attraper",
"avancer", "avoir", "baiser", "battre", "blesser",
"boire", "bosser", "bouger", "brûler", "cacher",
"calmer", "casser", "cesser", "changer", "chanter",
"charger", "chercher", "chier", "choisir", "commencer",
"comprendre", "compter", "conduire", "connaître", "construire",
"continuer", "coucher", "couper", "courir", "couvrir",
"coûter", "craindre", "crever", "crier", "croire",
"créer", "danser", "demander", "descendre", "devenir",
"deviner", "devoir", "dire", "diriger", "discuter",
"disparaître", "donner", "dormir", "douter", "durer",
"décider", "découvrir", "défendre", "dégager", "dépêcher",
"déranger", "désirer", "désoler", "détester", "détruire",
"dîner", "échapper", "écouter", "écrire", "embrasser",
"emmener", "emporter", "empêcher", "enfuir", "engager",
"enlever", "entendre", "entrer", "envoyer", "épouser",
"espérer", "essayer", "être", "étudier", "éviter",
"excuser", "exister", "expliquer", "faire", "falloir",
"fatiguer", "fermer", "ficher", "filer", "finir",
"forcer", "foutre", "frapper", "fuir", "fumer",
"gagner", "garder", "grandir", "habiter", "ignorer",
"imaginer", "importer", "inquiéter", "installer", "intéresser",
"inviter", "jeter", "jouer", "jurer", "laisser",
"lancer", "laver", "lever", "libérer", "lire",
"lâcher", "maintenir", "manger", "manquer", "marcher",
"marier", "mener", "mentir", "mettre", "monter",
"montrer", "moquer", "mourir", "mériter", "naître",
"obliger", "obtenir", "occuper", "offrir", "oser",
"oublier", "ouvrir", "paraître", "pardonner", "parier",
"parler", "partager", "partir", "passer", "payer",
"penser", "perdre", "permettre", "plaire", "plaisanter",
"pleuvoir", "porter", "poser", "poursuivre", "pousser",
"pouvoir", "prendre", "prier", "profiter", "promettre",
"proposer", "protéger", "prouver", "préférer", "préparer",
"présenter", "prévenir", "prévoir", "quitter", "raconter",
"ramener", "rappeler", "rater", "ravir", "recevoir",
"recommencer", "reconnaître", "refuser", "regarder", "regretter",
"rejoindre", "remarquer", "remercier", "remettre", "remonter",
"rencontrer", "rendre", "rentrer", "reposer", "reprendre",
"respecter", "respirer", "ressentir", "ressembler", "rester",
"retenir", "retirer", "retourner", "retrouver", "revenir",
"revoir", "rire", "risquer", "réaliser", "récupérer",
"réfléchir", "régler", "réparer", "répondre", "répéter",
"réussir", "réveiller", "rêver", "sauter", "sauver",
"savoir", "sembler", "sentir", "servir", "signer",
"signifier", "sonner", "sortir", "souffrir", "souhaiter",
"souvenir", "suffire", "suivre", "supposer", "supporter",
"surveiller", "séparer", "taire", "tenir", "tenter",
"terminer", "tirer", "tomber", "toucher", "tourner",
"traiter", "travailler", "traverser", "traîner", "tromper",
"trouver", "tuer", "utiliser", "valoir", "vendre",
"venir", "virer", "vivre", "voir", "voler",
"vouloir", "vérifier"];
let searchContainer;
let inputValue;

window.onload = function () {
    searchContainer = document.getElementById('searchResults');
    for (let i = 0, size = list.length; i < size; i++) {
        searchContainer.innerHTML += '<div id="' + i + '" class="result" onclick="setValue(this.id)">' + list[i] + '</div>';
    }
}

function search() {
    inputValue = document.getElementById('searchBox').value;
    if (inputValue === '') {
        searchContainer.innerHTML = '';
    }
    else {
        searchContainer.innerHTML = '';
        var regex = RegExp(inputValue);
        for (let i = 0, size = list.length; i < size; i++) {
            var str = list[i]
            if (regex.test(str)) {
                searchContainer.innerHTML += '<div id="' + i + '" class="result" onclick="setValue(this.id)">' + list[i] + '</div>';
            }
        }
        if (document.getElementById('searchResults').innerHTML === '') {
            searchContainer.innerHTML = '<div class="noResult">No results found</div>';
        }
    }
}

function showList() {
    document.getElementById('searchBox').value = '';
    if (document.getElementById('searchResults').innerHTML === '') {
        for (let i = 0, size = list.length; i < size; i++) {
            searchContainer.innerHTML += '<div id="' + i + '" class="result" onclick="setValue(this.id)">' + list[i] + '</div>';
        }
    }
    else {
        searchContainer.innerHTML = '';
        for (let i = 0, size = list.length; i < size; i++) {
            searchContainer.innerHTML += '<div id="' + i + '" class="result" onclick="setValue(this.id)">' + list[i] + '</div>';
        }
    }

}

function setValue(clickedId) {
    document.getElementById('searchBox').value = list[clickedId];
    searchContainer.innerHTML = '';
}
