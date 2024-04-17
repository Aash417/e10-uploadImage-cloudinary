require('dotenv').config({ path: './.env' });

import { app } from './app';

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`server is running at : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => console.log(`mongo db error : ${err}`));

app.listen(process.env.PORT, () => {
  console.log(`server is running at : ${process.env.PORT}`);
});
