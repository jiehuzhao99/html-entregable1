class Autor:
    # constructor
    def __init__(self, anio_nacimiento, canciones):
        self.anio_nacimiento = anio_nacimiento
        self.canciones = canciones

    # agregar cancion a autor
    def agregar_cancion(self, cancion):
        self.canciones.append(cancion)

    # eliminar cancion de autor
    def eliminar_cancion(self, cancion):
        self.canciones.remove(cancion)

    # devolver cantidad de canciones por genero
    def contar_canciones_por_genero(self):

        # dictionary ({rock:3, pop:2, etc})
        generos_count = {}

        # for each song in list of songs
        for cancion in self.canciones:

            # get genre of song
            genero = cancion.genero

            # if this genre is already in dictionary, add 1 to its value
            if genero in generos_count:
                generos_count[genero] += 1
            # else, add this genre to dictionary and set its value to 1
            else:
                generos_count[genero] = 1

        return generos_count