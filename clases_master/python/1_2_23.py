# # variables

# nombre = 'Jie'
# edad = 23
# apellido= 'Hu'



# # flujo ejecucion

# # condicionales
# edad = 23

# if edad >= 18:
#     print("puedes comprar alcohol")
#     alcohol = True
# elif edad >= 16 and edad < 18
#     print("")

# funciones
# def suma(num1, num2):
#     result = num1 + num2
#     return result

# num1 = input("Dame un numero ")
# num1 = int(num1)

# num2 = input("Dame otro numero ")
# num2 = int(num2)

# r1 = suma(num1, num2)
# print(r1)


letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

num_dni = int(input("dime tu dni"))

if num_dni > 0  or num_dni > 99999999
    print("EL dni es incorrecto")
    exit(1)

letra_dni = input("dime la letra")

posicion = num_dni % 23
letra_calculada = letras[posicion]

if letra_calculada == letra_dni:
    print("todo correcto")
else:
    print("la letra del dni es incorrecta")

#deberes: unidad 2 (atencion a funciones recursivas)