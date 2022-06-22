export const getReceipeDetails = (shouldReject = false) => new Promise((resolve, reject) => {
    if (shouldReject) {
        return reject(new Error('Something went wrong!'));
    }
    setTimeout(() => resolve({
        name: 'Receipe 1',
        ingredients: Array(10).fill(0).map((_, index) => ({
            id: index+1,
            name: `Ingredient${index+1}`,
            quantity: Math.floor(Math.random() * 10),
        }))
    }), 2000);
});