from models.country import Country
from models.city import City
import repositories.country_repository as country_repository
import repositories.city_repository as city_repository

city_repository.delete_all()
country_repository.delete_all()

# Using the Seed.py file I can test if my application fills 
# in the required information for populating both countires and citites


# This adds two countries
country1 = Country("Scotland")
country_repository.save(country1)
country2 = Country("Norway")
country_repository.save(country2)

# This adds two citites
city1 = City("Edinburgh", country1)
city_repository.save(city1)
city2 = City("Oslo", country2)
city_repository.save(city2)
