export const addClapOfArticle = (postItems, postItemToUpdate) => {

    return postItems.map(postItem =>
        postItem.id === postItemToUpdate.id
            ? postItem.clappedDict[postItemToUpdate.userName]
                ? { ...postItem, clap: postItem.clap + 1, clappedDict: { [postItemToUpdate.userName]: postItem.clappedDict[postItemToUpdate.userName] + 1 } }
                : { ...postItem, clap: postItem.clap + 1, clappedDict: { [postItemToUpdate.userName]: 1 } }
            : postItem
    );
}