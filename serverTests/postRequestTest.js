import http from "k6/http";
import { sleep } from "k6";

const homeObj = {
  beds: 1,
  title: 'insertionTest',
  user_id: 100, 
  category: 'Entire Place',
  pricepernight: 100,
  city: 'San Francisco',
  state: 'CA',
  zip: '94110'
}

export default function () {
  var payload = homeObj;
  http.post(`http://localhost:4321/home/`, payload);
  sleep(1);
}