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
        check: false
    },
    {
        id: 2,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 3,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 4,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 5,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 6,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 7,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 8,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 9,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 10,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 11,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 12,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 13,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 14,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 15,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 16,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 17,
        name: 'Burger "wanted"',
        check: false,
    },
    {
        id: 18,
        name: 'Burger "wanted"',
        check: false,
    },

];