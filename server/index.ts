import { app } from './utils/app';
import { PORT } from './constants';
import { router } from './router';

app.get('/healthz', (_req, res) => {
  res.status(200).send();
});

app.use('/api/v1', router);

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
