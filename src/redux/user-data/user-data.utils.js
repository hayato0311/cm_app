export const decreaseClapPoint = (userData, targetUserData) => {

    return userData.map(user =>
        user.id === targetUserData.id
            ? { ...user, clap_rest: user.clap_rest - 2 }
            : user
    );
}

export const increaseClappedPoint = (userData, targetUserData) => {

    return userData.map(user =>
        user.id === targetUserData.id
            ? { ...user, clapped: user.clapped + 1 }
            : user
    );
}