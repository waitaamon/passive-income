export  const setArticles = (state, data) => {
    state.articles = data
};

export  const setArticle = (state, data) => {
    state.article = data
};

export  const createArticle = (state, data) => {
  state.articles.push(data)
};

export  const updateArticle = (state, data) => {
  state.articles = data
};