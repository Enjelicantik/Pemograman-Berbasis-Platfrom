// Data MotoGP event
var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

// Membuat objek untuk menampung hasil pengelompokan
var groupedData = {};

// Mengelompokkan data berdasarkan negara pemenang
for (var i = 0; i < motoGP.length; i++) {
  var event = motoGP[i];
  var country = event.winner.country;
  var winnerName = `${event.winner.firstName} ${event.winner.lastName}`;
  var winLocation = `${event.circuit}, ${event.location}`;

  // Jika negara belum ada di objek, buat entry baru
  if (!groupedData[country]) {
    groupedData[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  // Menambahkan detail kemenangan ke negara terkait
  groupedData[country].winningCircuits.push({
    name: winnerName,
    winLocation: winLocation
  });

  // Menambah total kemenangan untuk negara tersebut
  groupedData[country].totalWin++;
}

// Menampilkan hasil dengan console.log biasa
for (var country in groupedData) {
  console.log(`Country: ${country}`);
  console.log('Winning Circuits:');
  for (var j = 0; j < groupedData[country].winningCircuits.length; j++) {
    var circuit = groupedData[country].winningCircuits[j];
    console.log(`  - ${circuit.name} won at ${circuit.winLocation}`);
  }
  console.log(`Total Wins: ${groupedData[country].totalWin}\n`);
}