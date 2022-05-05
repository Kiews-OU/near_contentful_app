export let walletState = {
  ID: "",
  walletSum: "",
  sum: "",
  rid: "",
  transaction: [],
  price: "",
  CID: "",
  walletData:{
    id:""
  }
};
export const walletReducer = (state = walletState, option) => {
  switch (option.type) {
    case "idChange":
      state.walletData.id=option.value
      localStorage.setItem('accountID',option.value)
      // console.log(localStorage);
      return state
      case "setdata":
        state.walletSum = option.available
        return state
      case "enterval":
        state[option.key] = option.data
        return state
      case "transaction":
        state.transaction.push(option.data)
        return state
      case "isError":
        state.TrError = option.error
        return state
      case "getPrice":
        state.price = option.payload
        return state
      case "setContr":
        state.CID = option.value
        return state
        case "setAccData":
          state[option.key]=option.value
          return state
          case "select":
            state.book.name=option.name
            state.book.price=option.price
            state.books.push(state.book)
            return state
    default:
      return state;
  }
};

