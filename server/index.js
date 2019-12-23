const express = require("express");
const axios = require('axios');
const cors = require('cors');
const Shopify = require('shopify-api-node');
const config = require('./config');

const app = express();

// DEV NOTE: All the back-end sensitive values and configurable constants
// are set on Heroku Config Vars and loaded on a separate config file (see ./config.js)
const shopify = new Shopify({
  shopName: config.SHOP_NAME,
  apiKey: config.API_KEY,
  password: config.PASS
});

app.get("/quiz-results", cors(), async (req, res) => {
  try {
    console.debug(`Fetching quiz results with mock URL: ${config.MOCK_URL} \n`);
    const quizResults = await axios.get(config.MOCK_URL);

    console.debug(`About to get product data from shopify for product with Id: ${config.TEST_PRODUCT_ID} \n`);
    const productData = await shopify.product.get(config.TEST_PRODUCT_ID);

    console.debug(`Getting variant data for 1 month subscription (id: ${config.TEST_VARIANT_ID}) \n`);
    const variantData = 
      productData.variants.filter((variant) => variant.id === parseInt(config.TEST_VARIANT_ID));

    const parsedProductData = {
      title: productData.title,
      description: productData.body_html,
      price: variantData[0].price,
      productType: productData.product_type
    };

    res.send({
      ...quizResults.data,
      parsedProductData,
    });
  } catch (error) {
    const msg = 'Unexpected error fetching quiz results';
    console.error(msg, error);
    res.status(500).send({ msg, error });
  }
});

app.listen(process.env.PORT || config.DEFAULT_PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT || config.DEFAULT_PORT}`);
});