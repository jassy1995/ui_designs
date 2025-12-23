
export const groupProject = (originalArray) => {
    const transformedArray = [];
    const categoryMap = new Map();
    originalArray.forEach((item) => {
        const { category, ...rest } = item;
        if (categoryMap.has(category)) {
            categoryMap.get(category).quantity += 1;
        } else {
            const newItem = { ...rest, category, quantity: 1 };
            categoryMap.set(category, newItem);
        }
    });
    categoryMap.forEach((item) => {
        transformedArray.push(item);
    });

    return transformedArray;
};