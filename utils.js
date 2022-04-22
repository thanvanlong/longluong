export const processListFood = (listFood) => {
    const temp = [];
    const originData = [];
    for (let i = 0; i < listFood.length; i++) {
        temp.push(1);
    }
    for (let i = 0; i < listFood.length; i++) {
        let count = 0;
        if (temp[i] == 1) {
            temp[i] = 0;
            for (let j = 0; j < listFood.length; j++) {
                if (listFood[j].id == listFood[i].id) {
                    count++;
                    temp[j] = 0;
                }
            }
            const newFood = { ...listFood[i], quanity: count };
            originData.push(newFood);
        }

    }

    return originData;
}

export const arr = [
    {
        id: 1,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 2,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 3,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 4,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 5,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 6,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 7,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 8,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 9,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 10,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 11,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 12,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 13,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 14,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 15,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 16,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 17,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },
    {
        id: 18,
        name: 'Burger "wanted"',
        check: false,
        type: 'NORMAL',
    },

];

export const category = [
    {
        id: 1,
        name: 'All',
        img: require('./assets/cooking.png')
    },
    {
        id: 2,
        name: 'Fr Food',
        img: require('./assets/pizza.png')
    },
    {
        id: 3,
        name: 'Ht Food',
        img: require('./assets/salad.png')
    },
    {
        id: 4,
        name: 'Drink',
        img: require('./assets/drink.png')
    },
    {
        id: 5,
        name: 'Hotpot',
        img: require('./assets/hot-pot.png')
    },
    {
        id: 6,
        name: 'Hotpots',
        img: require('./assets/hot-pot.png')
    }
];