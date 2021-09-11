const { pbkdf2 } = require('crypto');

//create hash

const orginalText = 'Step one - Create hash from this!';
const salt =
  'agdfghdsfg34 vb 453 yhnb nj J NJJ*(U JN23j4  n 5t5,?GDFgh;[]dfgh.f;. @ /r.f,lkdm4 ';

pbkdf2(orginalText, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});

// check hash
const userPass = process.argv[2];
const userPassHash = 'step two - use hash from first step';

const salt =
  'agdfghdsfg34 vb 453 yhnb nj J NJJ*(U JN23j4  n 5t5,?GDFgh;[]dfgh.f;. @ /r.f,lkdm4 ';

pbkdf2(userPass, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  else if (derivedKey.toString('hex') === userPassHash) {
    console.log('Loged in');
  } else {
    console.log('Failed to login');
  }
});
