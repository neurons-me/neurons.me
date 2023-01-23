const fs = require('fs');

const fileSystem = (dirPath) => {
// Obtener el listado de todos los directorios dentro del dir especificado.
const directories = fs.readdirSync(dirPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
// Inicializar el objeto "dirTree" que contendrá el listado de directorios y archivos .md
const dirTree = [];
// Recorrer cada directorio
directories.forEach((directory) => {
  // Obtener el listado de todos los archivos .md y directorios dentro del directorio actual
  const contents = fs.readdirSync(`${dirPath}/${directory}`, { withFileTypes: true });
  // Filtrar el listado para incluir solo archivos .md y directorios
  const files = contents
    .filter(item => item.isFile())
    .filter(file => file.name.endsWith('.md'))
    .map(file => file.name);
  const subdirectories = contents
    .filter(item => item.isDirectory())
    .map(subdir => subdir.name);

  // Agregar un elemento al objeto "dir" con el nombre del directorio y el listado de archivos .md y subdirectorios
  dirTree.push({
    name: directory,
    files,
    subdirectories,
  });
});
// Retornar el objeto "fileSystem"
return dirTree;
}


module.exports = fileSystem;
