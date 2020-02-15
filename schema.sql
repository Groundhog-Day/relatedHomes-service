


CREATE TABLE homes (
  home_id SERIAL PRIMARY KEY, 
  beds integer NOT NULL, --0-16
  CHECK (beds >= 0),
  CHECK (beds <= 16), 
  title varchar(60) NOT NULL,
  user_id NOT NULL REFERENCES users,  
  category varchar(30) NOT NULL, --'Entire Place', 'Private Room', 'Shared Room' 
  stars DECIMAL DEFAULT NULL, --1 significant digit
  reviewCount integer DEFAULT 0,
  pricePerNight integer NOT NULL,
  city varchar(30) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(5) NOT NULL
);

CREATE TABLE images (
  url varchar(80),
  rank integer,
  homeId integer REFERENCES homes, --FOREIGN KEY
);

CREATE TABLE similarScore (
  homeId integer REFERENCES homes,
  homeId integer REFERENCES homes, 
  similarScore float NOT NULL, 
);

CREATE TABLE users (
  user_id SERIAL NOT NULL,
  
)