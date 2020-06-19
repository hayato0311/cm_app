export const updateClapPoints = (userData, users) => {
    Object.keys(userData).forEach(key => {
        if (userData[key].id === users.clickedUser.id) {
            userData[key].clapRest -= 2;
        } else if (userData[key].id === users.recomender.id || userData[key].id === users.recomendedUser.id) {
            userData[key].clapped += 1;
        }
    });
    return { ...userData };
}