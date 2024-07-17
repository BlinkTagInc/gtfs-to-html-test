import gtfsToHtml from 'gtfs-to-html';
import { readFile } from 'fs/promises';
const config = JSON.parse(
  await readFile(new URL('./config.json', import.meta.url))
);

gtfsToHtml(config)
  .then(() => {
    console.log('HTML Generation Successful');
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });