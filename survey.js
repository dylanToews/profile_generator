const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {

  rl.question('If you were a duck, what would your name be? ', (answer2) => {

    rl.question('What music do you imagine a duck would like to listen to? ', (answer3) => {

      rl.question('Would you rather be a potato or an orange? ', (answer4) => {

        rl.question('Please explain why... ', (answer5) => {

          rl.question('Pepsi or Coke? ', (answer6) => {

            rl.question('Coke or Weed? ', (answer7) => {

              rl.question('Trick question. Drugs are bad. Please apologize ', (answer8) => {


                console.log(`This is the profile of ${answer1}, otherwise known as ${answer2}. They like long swims in the pond pretending to be a duck, and like to quack along to the sounds of ${answer3}. Physically, they resemble a ${answer6}. This is due to ${answer5}. They can be seen in the wild consuming excessive amounts of ${answer6}. Their official political position is ${answer8} due to their support of ${answer7}`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
