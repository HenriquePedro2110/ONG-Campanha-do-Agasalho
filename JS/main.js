import { carregarRota } from "./Modules/router.js";

carregarRota();

window.addEventListener("hashchange", carregarRota);
