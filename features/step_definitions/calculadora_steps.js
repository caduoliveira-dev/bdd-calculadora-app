const { Given, When, Then, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const assert = require("assert");
const path = require("path");

let browser;
let page;

Given("que o usuário acessa a calculadora", async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();

  const filePath = path.resolve(__dirname, "../../index.html");
  await page.goto(`file://${filePath}`);

  await page.waitForSelector("#display");
});

When("o usuário digita {string}", async function (valor) {
  for (const char of valor) {
    const buttons = await page.locator("button").all();
    for (const button of buttons) {
      const text = await button.textContent();
      if (text && text.trim() === char) {
        await button.click();
        break;
      }
    }
    // await page.waitForTimeout(10);
  }
});

When(
  "o usuário clica no botão de operação {string}",
  async function (operacao) {
    const buttons = await page.locator("button").all();
    for (const button of buttons) {
      const text = await button.textContent();
      if (text && text.trim() === operacao) {
        await button.click();
        break;
      }
    }
    // await page.waitForTimeout(100);
  }
);

When("o usuário clica no botão de igual", async function () {
  await page.click("button.btn-result");
  //await page.waitForTimeout(200);
});

When("o usuário clica no botão de limpar", async function () {
  const buttons = await page.locator("button").all();
  for (const button of buttons) {
    const text = await button.textContent();
    if (text && text.trim() === "C") {
      await button.click();
      break;
    }
  }
  // await page.waitForTimeout(100);
});

When("o usuário clica no botão de voltar", async function () {
  const buttons = await page.locator("button").all();
  for (const button of buttons) {
    const text = await button.textContent();
    if (text && text.trim() === "<-") {
      await button.click();
      break;
    }
  }
  // await page.waitForTimeout(100);
});

Then(
  "o resultado exibido deve ser {string}",
  async function (resultadoEsperado) {
    const resultadoAtual = await page.inputValue("#display");

    if (resultadoEsperado === "Infinity" || resultadoEsperado === "-Infinity") {
      assert.strictEqual(
        resultadoAtual,
        resultadoEsperado,
        `Esperado: "${resultadoEsperado}", mas obteve: "${resultadoAtual}"`
      );
    } else {
      const resultadoEsperadoNum = parseFloat(resultadoEsperado);
      const resultadoAtualNum = parseFloat(resultadoAtual);

      if (isNaN(resultadoEsperadoNum)) {
        assert.strictEqual(
          resultadoAtual,
          resultadoEsperado,
          `Esperado: "${resultadoEsperado}", mas obteve: "${resultadoAtual}"`
        );
      } else {
        const diferenca = Math.abs(resultadoAtualNum - resultadoEsperadoNum);
        assert.ok(
          diferenca < 0.00001,
          `Esperado: ${resultadoEsperado}, mas obteve: ${resultadoAtual}`
        );
      }
    }
  }
);

Then("o display deve estar vazio", async function () {
  const displayAtual = await page.inputValue("#display");
  assert.strictEqual(
    displayAtual,
    "",
    `Esperado display vazio, mas obteve: "${displayAtual}"`
  );
});

Then("o display deve exibir {string}", async function (valorEsperado) {
  const displayAtual = await page.inputValue("#display");
  assert.strictEqual(
    displayAtual,
    valorEsperado,
    `Esperado: "${valorEsperado}", mas obteve: "${displayAtual}"`
  );
});

After(async function () {
  if (browser) {
    await browser.close();
    browser = null;
    page = null;
  }
});
