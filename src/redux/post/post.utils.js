export const addClapOfArticle = (postItems, clickInfo) => {
    return postItems.map(postItem =>
        postItem.id === clickInfo.articleId
            ? postItem.clapHistory[clickInfo.userName]
                ? { ...postItem, clap: postItem.clap + 1, clapHistory: { ...postItem.clapHistory, [clickInfo.userName]: postItem.clapHistory[clickInfo.userName] + 1 } }
                : { ...postItem, clap: postItem.clap + 1, clapHistory: { ...postItem.clapHistory, [clickInfo.userName]: 1 } }
            : postItem
    );
}