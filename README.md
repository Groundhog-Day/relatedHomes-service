# Related-Homes
Related Home Information Component

# Server side Documention
Routes for information are as follows

# CREATE
Route: '/add/home/' will add a home, required inputs on the home object are category, bedCount, listingTitle, pricePerNight, initializes other values. Those fields must be sent over in the requests. If it does not conform the response is 'bad data' otherwise, it is saved and the Id is returned. 

Route: '/add/image/' will add an image.  

Route: '/add/similar/' will add a relationship between two homes. 

# READ 
Legacy Routes
Route: '/getHomes' which will return three home listings.  

Route: '/api/related-homes/:listingId' which will return a listing
Example: http//localhost:4321/api/related-homes/1 will return listing of id 1.

New Routes
Route: '/getHome/:listingId' which will also return a listing. 

Example: http//localhost:4321/getHome/1 will return listing of id 1. 

# UPDATE
Route: '/update/:listingId' will update a home listing. 

Route: 'update/image/:listingId/:imageId' updates an image/'.

Route: 'update/similiar/:listingId/:similarId' updates a similarId.


# DELETE

Route: '/delete/:listingId' will delete home of listingId. 
Example: http//localhost:4321/deleteHome/1 will delete home with an id of 1. 

Route: '/delete/image/:listingId/:imageId' will delete an image attached to a particular listingId. Id and url of the image should be on the body of the requrest. 

Route: '/delete/similar/:listingId/:similarId' will delete a similar relationship. 