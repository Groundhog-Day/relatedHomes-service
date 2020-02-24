//Takes in data and alters the format to an array of listings objects with 
//embedded image arrays



const parseHomes = (data) => {
  const parseHome = (home, images) => {

    const parsedHome = {};
    parsedHome.beds = home.beds;
    parsedHome.title = home.title;
    parsedHome.category = home.category;
    parsedHome.stars = home.stars;
    parsedHome.reviewCount = home.reviewcount;
    parsedHome.pricePerNight = home.pricepernight;
    parsedHome.images = images;

    return parsedHome;
  }
  parsedHomes = []
  let home = data[0];
  let homeImages = [];
  homeImages.push(home.image_url);
  //
  for (let i = 1; i < data.length; i++) {
    let testHome = data[i]
    if (home.home_id === testHome.home_id) {
      homeImages.push(testHome.image_url);
    } else {
      //create parsedHome
      //push parsedHome
      parsedHomes.push(parseHome(home, homeImages));
      // reset
      home = testHome;
      homeImages = [];
      homeImages.push(home.image_url);
    }
  }
  parsedHomes.push(parseHome(home, homeImages));


  return parsedHomes;
}

module.exports = parseHomes;