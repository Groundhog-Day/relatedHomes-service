import http from "k6/http";
import { sleep } from "k6";

const homes = [
  [9999999,'KY', '40051'],
  [4999999,'TX', '75702'],
  [2999999,'ID','83864'],
  [107,'AK','99747'],
  [53967,'TX','79312'],
  [2796851,'MA','02495'],
  [7119785, 'IN', '46795'],
  [2349785, 'WV', '25621'],
  [1349785, 'PA', '18431']
]

export default function () {
  let home = homes[Math.floor(Math.random()*homes.length)]
  http.get(`http://localhost:4321/home/${home[0]}/${home[1]}/${home[2]}`);
  sleep(1);
}