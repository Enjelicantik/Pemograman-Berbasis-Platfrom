let http = require ('http')
let port = 2000
const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        },   
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK',
        },
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy',
        },
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        },
    },
];

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`); 
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/') {
        res.end(JSON.stringify(motoGP));
    } else if (req.url === '/country') {
        const groupedByCountry = motoGP.reduce((acc, race) => {
            const country = race.winner.country;
            if (!acc[country]) {
                acc[country] = [];
            }
            acc[country].push(race);
            return acc;
        }, {});
        res.end(JSON.stringify(groupedByCountry));
    } else if (req.url === '/name') {
        const groupedByName = motoGP.reduce((acc, race) => {
            const name = `${race.winner.firstName} ${race.winner.lastName}`;
            if (!acc[name]) {
                acc[name] = [];
            }
            acc[name].push(race);
            return acc;
        }, {});
        res.end(JSON.stringify(groupedByName));
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
    }
});


const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
