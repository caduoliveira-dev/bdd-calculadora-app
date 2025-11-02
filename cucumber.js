module.exports = {
  default: {
    require: ["features/step_definitions/**/*.js"],
    format: [
      "progress-bar",
      "json:reports/cucumber_report.json",
      "html:reports/cucumber_report.html",
    ],
    formatOptions: {
      snippetInterface: "async-await",
    },
  },
};
