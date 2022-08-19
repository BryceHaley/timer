const args = process.argv.slice(2);

//filter for understandable arguments
const beeptimes = args.filter(elem => !(Number.isNaN(elem)) && elem >= 0)

//make beeps
for (const beep of beeptimes) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, beep * 1000);
}

  