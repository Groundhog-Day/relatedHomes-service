# Related-Homes
Related Home Information Component

# Server side Documention
Routes for information are as follows

# CREATE
Use POST method. 

Route: '/home' 
Body: JSON object 
  { category (string), 
    bedCount (0 - 16), 
    listingTitle (string), 
    pricePerNight (int), 
    address1 (string), 
    address2 (string), 
    city (string), 
    state (string), 
    zipCode (string), 
    imageArray,
  } 

All fields required, including an imageArray of length at least 1. Initializes other values. 

Return: listingId of inserted object, null if listing does not conform to requirements

Route: '/image' will add an image.  
Body: JSON object 
  { url (string),
    rank (int),
  }
Return: nothing.

# READ 
Use GET method. 

Legacy Routes
Route: '/legacy/getHomes' which will return three home listings.  

Route: 'l/egacy/api/related-homes/:listingId' which will return a listing
Example: http//localhost:4321/api/related-homes/1 will return listing of id 1.

New Routes
Route: '/home/:id'  

Body: None
Return:   
  JSON object 
  { listingId, 
    BedCount, 
    Category, 
    listingTitle, 
    Stars, 
    ReviewCount, 
    Price, 
    Address, 
    Images
  }
  
  Similiar Listings: { Top 20 similiar listings, Ids and complete information above} 



# UPDATE
Use PATCH method.

Route: '/home/:id' will update a home listing. 
Required Information: Any updated fields on home listing on body. Cannot update listingId. 
UpdateOptions: 
  { listingId, 
    BedCount, 
    Category, 
    listingTitle, 
    Stars, 
    ReviewCount, 
    Price, 
    Address
  }

Route: '/image/:id' updates an image'.
Required Information: Any updated fields on home listing on body. 
UpdateOptions: 
  { Url, 
    Rank
  }

# DELETE
Use Delete method.

Route: '/home/:id' will delete home of listingId. 

Route: '/image/:id' will delete an image of particular id. 


