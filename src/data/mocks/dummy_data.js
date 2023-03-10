export const clothes = [
    {
        id: 'lasdafdsf432',
        category: 'Pant',
        color: 'Black',
        description: 'lorem ipsum bla vla bla',
        added: new Date()
    },
    {
        id: 'lasdafdsge32',
        category: 'Shirt',
        color: 'Black',
        description: 'lorem ipsum bla vla bla',
        added: new Date()
    },
    {
        id: 'lasdafdsf462',
        category: 'Shirt',
        color: 'Blue',
        description: 'lorem ipsum bla vla bla',
        added: new Date()
    },
]
export const members = [
    {
        id: 'dasfdsf6s54',
        first_name: 'Daniel',
        last_name: 'Gonzalez',
        identification: '98022405864',
        birth_date: new Date('1998-02-24'),
        position: 'Baritone sax',
        sex: 'm',
        added: new Date()
    },
    {
        id: 'dasfdsfd354',
        first_name: 'Juancho',
        last_name: 'Fernandez',
        identification: '86042304796',
        birth_date: new Date('1986-04-23'),
        position: 'Clarinet',
        sex: 'm',
        added: new Date()
    },
]
export const songs = [
    {
        id: 'adsaf5+89r',
        title: 'El cuarto de Tula',
        composer: [
            {
                name: 'Marcelino Perez',
                country: 'Cuba',
                birth_year: 1953,
            },
        ],
        arranger: 'Fulanito de Tath',
        genre: 'Son',
        details: {
            tempo: 80,
            signature: '4/4',
            key: 'A',
            measures_number: 54

        },
        scores: [
            '/ildas/fds4fs65as.pdf'
        ],
        added: new Date()
    },
]
export const acts = [
    {
        id: 'dasjdksj2',
        date: new Date(),
        workplace: 'Villa Tropico',
        clothes: ['Black Shirt', 'Black Pant'],
        gains: {
            date: new Date(),
            currecies: [
                {
                    currency: 'USD',
                    amount: 5,
                    change: 160
                },
                {
                    currency: 'CAD',
                    amount: 5,
                    change: 120
                },
                {
                    currency: 'CUP',
                    amount: 1000
                },
            ],
            founding: 115
        },
        added: new Date()
    },
]