import Cat from "./components/Cat";
import { cats } from "../data/cats";

const html = cats.map(cat => Cat(cat)).join("\n");

document.getElementById("output").innerHTML = html;
