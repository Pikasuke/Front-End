//en cliquant sur le lien de log l'utilisateur arrivera sur la page d'authentification officiel de spotify puis sera redirigé sur notre appli


export const authPoint ="https://accounts.spotify.com/authorize";

const redirectUri ="http://localhost:3000/";

const clientId = "3b91bc61be454470a73eb1785d2cad72";
const clientId2 = "8765545b25344f0095aa282cbadd8093";

// scopes permet d'avoir acces à l'utilisation des fcts de l'api spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl= `${authPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const loginUrl2= `${authPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item)=> {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}