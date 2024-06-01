export const swaggerOpts = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Documentacion con swagger OPEN API Standard - ADOPTME API",
      description: "API de ADOPTME, Como usar los endpoints y sus parametros",
      version: "1.0.0",
    },
  },
  apis: [`./src/docs/**/*.yml`],
};
