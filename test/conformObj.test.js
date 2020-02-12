const conform = require('../server/helperFunctions/dataConform.js');

describe('Test for conform function', ()=> {
  it('Initializes starCount and reviewCount', ()=>{
    let testObj = {
      homeCategory: 'a',
      bedCount: 1,
      listingTitle: 'title',
      pricePerNight: 200,
    };
    expect(conform(testObj).starCount).toEqual(null);
    expect(conform(testObj).reviewCount).toEqual(0);
  })
  
  
  it('Contains an array for images', ()=>{
    let testObj = {
      homeCategory: 'a',
      bedCount: 1,
      listingTitle: 'title',
      pricePerNight: 200,
    };
    expect(conform(testObj).images.length).toEqual(0);
    testObj.images = [1,2];
    expect(conform(testObj).images[1]).toEqual(2);
  })

  it('returns null if there is no data', () => {
    const testObj = {
      bedCount: 1,
      listingTitle: 'title',
      pricePerNight: 200,
    };
    expect(conform(testObj)).toEqual(null);
    const testObj2 = {
      homeCategory: 'a',
      listingTitle: 'title',
      pricePerNight: 200,
    };
    expect(conform(testObj2)).toEqual(null);
    const testObj3 = {
      homeCategory: 'a',
      bedCount: 1,
      pricePerNight: 200,
    };
    expect(conform(testObj3)).toEqual(null);
    const testObj4 = {
      homeCategory: 'a',
      bedCount: 1,
      listingTitle: 'title',
    };
    expect(conform(testObj4)).toEqual(null);
  })
})