import firebase from 'firebase'

export const getArticles = ( { commit }) => {
  return firebase
    .database()
    .ref('articles')
    .once('value', snapshot => {
      commit('setArticles', snapshot.val());
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
