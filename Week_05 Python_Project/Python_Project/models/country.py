class Country:
    def __init__(self, country_name, id=None):
        self.country_name = country_name
        self.id = id

    def mark_as_visited(self):
        self.visited = True
