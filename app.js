const express = require('express');
const app = express();


app.use(express.static('dist'))



const PORT = process.env.PORT || 3000


const server = app.listen(PORT, () =>
  console.log(`server running on PORT ${PORT}`)
);



// close server on unhandled rejection
process.on('unhandledRejection', (err) => { 
  console.log(err);
  console.log('unhandled rejection, φ(゜▽゜*)♪, shutting down server...');
  server.close(() => process.exit(1))
})

// handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(err);
  console.log("uncaught exception, φ(゜▽゜*)♪, shutting down server...");
  server.close(() => process.exit(1)); 
});


// handling SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM received. 👏 Shutting down gracefully.');
  server.close(() => console.log('💥Process terminated'));
  // sigterm already stops the program..so no need to call process.exit.
})
