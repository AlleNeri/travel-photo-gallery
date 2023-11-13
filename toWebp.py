import os
import subprocess
import sys

# Verifica se sono stati forniti correttamente i percorsi delle cartelle come input
if len(sys.argv) != 3:
    print("Sono necessari due argomenti: percorso della cartella da convertire e percorso della cartella convertita")
    sys.exit(1)

# Percorso della cartella contenente le immagini da convertire
cartella_immagini_da_convertire = sys.argv[1]

# Percorso della cartella in cui salvare le immagini convertite
cartella_immagini_convertite = sys.argv[2]

# Trova tutti i file con estensione .png o .jpeg/.jpg nella cartella da convertire
immagini_da_convertire = []
for file in os.listdir(cartella_immagini_da_convertire):
    if file.lower().endswith(('.png', '.jpeg', '.jpg')):
        immagini_da_convertire.append(file)

# Crea la cartella in cui salvare le immagini convertite
if not os.path.exists(cartella_immagini_convertite):
    os.makedirs(cartella_immagini_convertite)

# Converti ogni immagine in formato .webp utilizzando cwebp
for immagine in immagini_da_convertire:
    percorso_immagine_da_convertire = os.path.join(cartella_immagini_da_convertire, immagine)
    percorso_immagine_convertita = os.path.join(cartella_immagini_convertite, os.path.splitext(immagine)[0] + ".webp")
    
    comando = f"cwebp {percorso_immagine_da_convertire} -o {percorso_immagine_convertita}"
    subprocess.run(comando)
    
    print(f"Immagine convertita: {immagine}")

print("Conversione completata!")
