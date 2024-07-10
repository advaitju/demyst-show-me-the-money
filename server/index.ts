import { app } from './utils/app';
import { PORT } from './constants';

app.get('/healthz', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
