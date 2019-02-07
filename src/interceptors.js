import axios from 'axios'
import store from '@/store'

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  
  if(error.response.status === 400) {
    
    let errors = []
    
    switch (error.response.data.error.message){
      case 'MISSING_EMAIL':
        errors.push({email: ['Email is required']})
        break
    }
    
    store.dispatch('setValidationErrors', errors)
  }
  
  return Promise.resolve(error)
})