# Related-Homes
Related Home Information Component

# Server side Documention
Routes for information are as follows

# CREATE
Use POST method. 

### Route: 
'/home' 
###### Body: JSON object
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
    userId (int),
  } 

All fields required, including an imageArray of length at least 1. Initializes other values. 

###### Return 
ListingId of inserted object, null if listing does not conform to requirements

### Route:
'/user' will add a user

##### Body: JSON object
{
  user_name (string),
  hash (string)
}

### Route: 
'home/:home_id/image' will add an image.  
##### Body: JSON object 
  { url (string),
    rank (int),
  }
##### Return: nothing.

# READ 
Use GET method. 

## Legacy Routes
### Route: 
'/legacy/getHomes' which will return three home listings.  

### Route: 
'legacy/api/related-homes/:listingId' which will return a listing
Example: http//localhost:4321/api/related-homes/1 will return listing of id 1.

## New Routes
### Route: '/home/:id/:state/:zip'  

##### Body: None
##### Return: JSON object 
  { home_id, 
    beds, 
    category,
    user_id, 
    title, 
    stars, 
    reviewCount, 
    price, 
    city,
    state,
    zip,
    state,
    city,
    images
  }
  
  Similiar Listings: { Top 12 similiar listings, Ids and complete information above} 

# UPDATE
Use PATCH method.

### Route: 
'/home/:id/:state/:zip' will update a home listing. 
Required Information: Any updated fields on home listing on body. Cannot update listingId. Requieres userId to match one on file.

##### Body: 
{ user_id }
##### UpdateOptions: 
  { home_id, 
    BedCount, 
    Category, 
    listingTitle, 
    Stars, 
    ReviewCount, 
    Price, 
    Zip,
    State,
    City,
  }

### Route: '/image/:id' updates an image'.
##### Update Options:
  { url, 
    rank} 

# DELETE
Use Delete method.

### Route: 
'/home/:id' will delete home of listingId. 

##### Body
requires a userId to match the query.  

### Route: 
'/image/:id' will delete an image of particular id. 

##### Body
requires a userId to match the query.  

