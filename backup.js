import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createBackup() {
  try {
    const timestamp = new Date().toISOString().replace(/[:T]/g, '-').split('.')[0];
    const backupDir = path.join(__dirname, 'backups', timestamp);

    // Crear el directorio de backup
    fs.mkdirSync(backupDir, { recursive: true });

    // Función para copiar archivos y directorios recursivamente
    function copyRecursive(src, dest) {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();

      if (isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(childItemName => {
          copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
        });
      } else {
        fs.copyFileSync(src, dest);
      }
    }

    // Copiar los archivos y directorios principales
    ['src', 'public', 'index.html', 'package.json', 'vite.config.ts', 'tsconfig.json', 'tailwind.config.js'].forEach(item => {
      const srcPath = path.join(__dirname, item);
      const destPath = path.join(backupDir, item);
      if (fs.existsSync(srcPath)) {
        copyRecursive(srcPath, destPath);
      }
    });

    console.log(`Backup creado exitosamente en: ${backupDir}`);
    return true;
  } catch (error) {
    console.error(`Error al crear el backup: ${error.message}`);
    return false;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const success = createBackup();
  process.exit(success ? 0 : 1);
}

export default createBackup;