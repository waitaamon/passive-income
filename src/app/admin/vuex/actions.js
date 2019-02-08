import firebase from 'firebase'

export const getArticles = ( { commit }) => {
  commit('setLoading', true, { root: true })
  return firebase
    .database()
    .ref('articles')
    .once('value')
    .then((data) => {
      const articles = []
      const obj = data.val()
      for(let key in obj) {
        articles.push({
          id: key,
          title: obj[key].title,
          imagePath: obj[key].imagePath,
          description: obj[key].description
        })
      }
      commit('setArticles', articles)
      commit('setLoading', false, {root: true})
    });
};

export const newArticle = ({ commit }, payload ) => {
  
  const article = {
    title: payload.title,
    imagePath: payload.imagePath,
    description: payload.description
  }
  
  return firebase.database().ref('articles').push(article)
    .then((data) => {
    const key = data.key
    commit('createArticle', { ...payload, id: key})
    
    return Promise.resolve(data)
  })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const updateArticle = ({commit}, payload ) => {
  
  return firebase.database().ref('articles').push(payload).then((data) => {
    
    commit('createArticle', payload)
    
    return Promise.resolve(data)
  })
}
