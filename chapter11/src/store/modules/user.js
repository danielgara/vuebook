export default {
    state: { 
        name: "Luis",
        lastName: "Correa"
    },
    getters:{
        getName: state => {
            return state.name;
        },
    }
  };