import * as Types from './../constants/ActionTypes'

var initialState = [
    { 
        id : 1,
        name : 'Iphone 8',
        description : 'Sản phẩm được sản xuất tại Mỹ',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 500,
        inventory : 10,
        rating : 3
    },
    { 
        id : 2,
        name : 'Samsung Galaxy 8',
        description : 'Sản phẩm được sản xuất tại Hàn Quốc',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 450,
        inventory : 15,
        rating : 5
    },
    { 
        id : 3,
        name : 'Nokia 8',
        description : 'Sản phẩm được sản xuất tại Nhật',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price : 400,
        inventory : 20,
        rating : 4
    }
]

var appReducer = (state = initialState, action) => {
    switch(action.type) {
        default :
            return [...state]
    }
}

export default appReducer