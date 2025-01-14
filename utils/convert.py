import os
from PIL import Image

def create(directory):
    for file in os.listdir("./public/assets/"+directory):
        # Verificar si el archivo no tiene la extensión '.png'
        if not file.endswith(".png"):
            print(file)
            # Abrir y procesar el archivo
            im = Image.open(f"./public/assets/{directory}/{file}").convert("RGB")
            width,height=im.size
            if width<500 and height<500:
                im=im.resize((576,576))
            # Crear el directorio si no existe
            os.makedirs(f"utils/assets/{directory}/", exist_ok=True)
            file_name,_ = os.path.splitext(file)
            # Guardar el archivo en el nuevo formato con el nombre invertido parcialmente
            im.save(f"utils/assets/{directory}/{file_name}.jpg", "JPEG")

directory=""
while directory!="exit":
    directory=input("Ingresa el archivo a convertir")
    if directory!="exit":
        create(directory)
    if directory=="exit":
        break
# Iterar a través de los archivos en el directorio especificado
