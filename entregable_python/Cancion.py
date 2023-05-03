import collections

class Cancion:
    # constructor
    def __init__(self, nombre, genero, autores, cantantes, letra):
        self.nombre = nombre
        self.genero = genero
        self.autores = autores
        self.cantantes = cantantes
        self.letra = letra

    # agregar autor a cancion
    def agregar_autor(self, autor):
        self.autores.append(autor)
    
    # eliminar autor de cancion
    def eliminar_autor(self, autor):
        self.autores.remove(autor)

    # agregar cantante a cancion
    def agregar_cantante(self, cantante):
        self.cantantes.append(cantante)
    
    # eliminar cantante de cancion
    def eliminar_cantante(self, cantante):
        self.cantantes.remove(cantante)

    # devolver letra de la cancion linea a linea
    def letra_linea_a_linea(self):
        for linea in self.letra:
            return linea
    
    # devolver las 10 palabras mas usadas en la cancion
    def top_10_palabras(self):
        letra_string = " ".join(self.letra)
        numero_palabras = collections.Counter(letra_string.split())
        return numero_palabras.most_common(10)

