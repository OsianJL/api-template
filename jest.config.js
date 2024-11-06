module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'], // Solo busca en esta carpeta
  moduleFileExtensions: ['ts', 'js'],
  // Añade esta opción para omitir tests vacíos
  passWithNoTests: true,
};

  