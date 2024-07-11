import { Router } from 'express';

const router = Router();

router.get('/balanceSheet', async (_req, res) => {
  try {
    const fetchResponse = await fetch(
      process.env.XERO_API_URL ||
        'http://localhost:3000/api.xro/2.0/Reports/BalanceSheet'
    );
    const data = await fetchResponse.json();

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router };
