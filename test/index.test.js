const {get} = require('axios');
require('should');
const headers = {'Content-Type' : 'application/json'};

const cases = [
    {x : 1, xs : 99},
    {x : 2, xs : 255},
    {x : 3, xs : 483}
];

cases.forEach(({x, xs}) => 
    describe(xs + 'asyncAdd', () =>
        it(`should respond ${x}, ${xs}`, async () => {
            const URL1 = `http://kodaktor.ru/api2/there/${x}`;
            const{data: b} = await get(URL1, {headers});
            const URL2 = `http://kodaktor.ru/api2/andba/${b}`;
            const{data: c} = await get(URL2, {headers});

            b.should.equal(xs);
            c.should.equal(x);
        })
    )
);

