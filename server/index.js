const express = require("express");
const axios = require('axios');
const cors = require('cors');
const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'zzzsdev',
  apiKey: '183d874274c7c9efb9ea53d450f48f33',
  password: '690770e77d1ec561990e97961ba2c784'
});

const PORT = 1234;
const app = express();

const TEST_PRODUCT_ID = 4320982433846;
const TEST_VARIANT_ID = 31036521381942;
const mockURL = 'https://zzz-api-backend-stage.herokuapp.com/api/quiz/results';

app.get("/quiz-results", cors(), async (req, res) => {
  try {
    console.debug(`Fetching quiz results with mock URL: ${mockURL} \n`);
    const quizResults = await axios.get(mockURL);

    console.debug(`About to get product data from shopify for product with Id: ${TEST_PRODUCT_ID} \n`);
    const productData = await shopify.product.get(TEST_PRODUCT_ID);

    console.debug(`Getting variant data for 1 month subscription (id: ${TEST_VARIANT_ID}) \n`);
    const variantData = productData.variants.filter((variant) => variant.id === TEST_VARIANT_ID);

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

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});