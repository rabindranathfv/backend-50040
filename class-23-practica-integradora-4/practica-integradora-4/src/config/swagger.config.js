export const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentacion con swagger OPEN API - Library API",
      description: "practica integradora - Documentation with swagger",
      version: "1.0.1",
    },
  },
  apis: [`./src/docs/**/*.yml`],
};
