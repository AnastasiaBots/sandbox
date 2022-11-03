const {expect} = require('chai')

// eng
// 'LANDLORD FRANK'
// Uncle Frank is planning to build a guest house on his backyard, so he can give it for rent.
// The maximum Floor Area Ratio is 40% of lot area and the maximum guest house area in this town is 1000 SF.
// Also, in the Floor Area Ratio are not included garages which less or equal to 400 SF. But, for example,
// if garage area is 450 SF, Floor Area Ratio includes 50 SF
// You will be given 3 parameters in SF: main, garage, and lot
// Your task is to calculate how big the guest house could be using the formula:
// lot * 40% >= (guestHouse + mainHouse + garage) / lot
// Round up the guestHouse SF
// if 400SF <= guestHouse <= 600SF return `${guestHouse}SF - Studio!`
// if 600SF < guestHouse <= 800SF return `${guestHouse}SF - Nice 1-bedroom`
// if guestHouse > 800 SF return `${guestHouse}SF - 2-bedroom, not bad`
// In other cases return 'Sorry Frank, it will not work out'



// rus
// Лендлорд Фрэнк
// Дядя Фрэнк собирается построить гостевой дом на заднем дворе, чтобы сдавать его в аренду.
// Максимальная площадь жилой засройки не должна превышать 40% площади участка,
// и максимальный размер гостевого дома, допустимый к строительству в этом городе равен 1000 SF.
// Также, в площадь жилой застройки не включаются гаражи до 400 SF включительно, но, если, например
// площадь гаража = 450 SF, то в площадь жилой засройки включаются 50 SF
// Вам даны 3 параметра в SF: mainHouse, garage, lot
// Ваша задача, найти максимальную площадь гостевого дома, используя формулу:
// lot * 40% >= (guestHouse + mainHouse + garage) / lot
// Результат округлите до целого числа.
// Если 400SF <= guestHouse <= 600SF, вернуть `${guestHouse}SF - Studio!`
// Если 600SF < guestHouse <= 800SF, вернуть `${guestHouse}SF - Nice 1-bedroom`
// Если guestHouse > 800SF, вернуть `${guestHouse}SF - 2-bedroom, not bad`
// В остальных случаях вернуть 'Sorry Frank, it will not work out'





function adu(main, garage, lot){
    if(garage > 400){
        garage = garage - 400
    }
    let max = lot * 0.4
    let existing = main + garage
    let guestHouse = max - existing
    if(existing >= max){
        return 'Sorry Frank, it will not work out'
    }
    if(guestHouse > 1000){
        guestHouse = 1000
    }
    guestHouse = Math.round(guestHouse)
    if(guestHouse >= 400 && guestHouse <= 600){
        return guestHouse+'SF - Studio!'
    } else if(guestHouse > 600 && guestHouse <= 800){
        return guestHouse+'SF - Nice 1-bedroom'
    } else if(guestHouse <= 1000){
        return guestHouse+'SF - 2-bedroom, not bad'
    } else return 'Sorry Frank, it will not work out'
}



describe('Unit tests for Franks ADU', function (){
    it('Returns 430SF for main=1970, garage=400, lot=7000', function (){
        expect(adu(1970, 400, 7000)).to.eq('430SF - Studio!')
    })
    it('Returns 690SF for main=2970, garage=460, lot=9300', function (){
        expect(adu(2970, 460, 9300)).to.eq('690SF - Nice 1-bedroom')
    })
    it('Returns 1000SF for main=2970, garage=460, lot=13300', function (){
        expect(adu(2970, 460, 13300)).to.eq('1000SF - 2-bedroom, not bad')
    })
    it('Returns error message for main=2970, garage=460, lot=500', function (){
        expect(adu(2970, 460, 500)).to.eq('Sorry Frank, it will not work out')
    })
    it('Returns error message for main=NaN, garage=undefined, lot=+', function (){
        expect(adu(NaN, undefined, '+')).to.eq('Sorry Frank, it will not work out')
    })
    it('Returns 818SF for main=1711.34, garage=687.2, lot=7040.56', function (){
        expect(adu(1711.34, 687.2, 7040.56)).to.eq('818SF - 2-bedroom, not bad')
    })
})