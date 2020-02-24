// Function takes in data and conforms to database

const conformData = (obj) => {
  const conformedObj = {};
  // not required
  if (Array.isArray(obj.images)) {
    conformedObj.images = obj.images;
  } else {
    conformedObj.images = [];
  }

  // conformedObj.starCount = null;
  // conformedObj.reviewCount = 0;

  // required
  if(!obj.homeCategory || !obj.bedCount || !obj.listingTitle || !obj.pricePerNight) {
    return null;
  }
  conformedObj.homeCategory = obj.homeCategory;
  conformedObj.bedCount = obj.bedCount;
  conformedObj.listTitle = obj.listTitle
  conformedObj.pricePerNight = obj.pricePerNight

  return conformedObj;
}

module.exports = conformData;