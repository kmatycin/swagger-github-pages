window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  window.ui = SwaggerUIBundle({
    urls: [
      { url: "swagger.yaml", name: "Основной API" },
      { url: "eventmanager.yaml", name: "Авторизация" },
      { url: "worldskills.yaml", name: "Сборка ПК" },
      { url: "course.yaml", name : "Для курса"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
  //</editor-fold>
};
