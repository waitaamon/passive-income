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

export const setArticle = ({commit}, payload) => {

  commit('setArticle', payload)
  
}

export const updateArticle = ({commit}, payload ) => {
  
  commit('setLoading', false, {root: true})
  
  let article = {
    title: payload.title,
    description: payload.description,
    imagePath: payload.imagePath,
  }
  
  return firebase.database().ref('articles').child(payload.id).set(article)
}

export const deleteArticle = ({commit}, id ) => {
  
  commit('setLoading', false, {root: true})
  
  return firebase.database().ref('articles').child(id).remove()
}
