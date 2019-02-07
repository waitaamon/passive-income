export  const setArticles = (state, data) => {
    state.articles = data
};

export  const createArticle = (state, data) => {
  state.articles.push(data)
};