# SoftwareAngel
# Build Imagen -t agrega un tag, nombre de la imagen
docker build -t getting-start . 
# Run Docker sharing volums 
docker run -v /Users/leonardosegars/RepoTest/SoftwareAngel/src:/app/src -it -p 4800:4800 getting-start               
