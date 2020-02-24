


CREATE TABLE homes (
  home_id SERIAL PRIMARY KEY, 
  beds integer NOT NULL, --0-16
  CHECK (beds >= 0),
  CHECK (beds <= 16), 
  title varchar(60) NOT NULL,
  user_id integer NOT NULL,  
  category varchar(30) NOT NULL, --'Entire Place', 'Private Room', 'Shared Room' 
  stars DECIMAL DEFAULT NULL, --1 significant digit
  reviewCount integer DEFAULT 0,
  pricePerNight integer NOT NULL,
  city varchar(250) NOT NULL,
  state varchar(250) NOT NULL,
  zip varchar(5) NOT NULL
);

CREATE TABLE images (
  image_id SERIAL,
  image_url varchar(80) NOT NULL,
  showrank integer NOT NULL,
  home_id integer 
);

-- CREATE TABLE similarScore (
--   homeId integer REFERENCES homes,
--   homeId integer REFERENCES homes, 
--   similarScore float NOT NULL 
-- );

