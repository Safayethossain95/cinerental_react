function getImgUrl(name) {
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
 }

 function getImgIcon(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
 }
 function getImgrealIcon(name) {
    return new URL(`../assets/icons/${name}`, import.meta.url).href
 }

 export {getImgUrl,getImgIcon,getImgrealIcon};