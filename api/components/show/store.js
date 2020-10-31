/*

It is in charge of managing the database, here it is specified, where and when the information is saved

[code index]

  1.- STORE FUNCTIONS

    1.1.1 [getLocation] - SEARCH POSTS LOCATIONS
    2.2.2 [getLocationTop] - SHOW POSTS LOCATIONS TOP 2 POST OF MEXICO AND 2 POSTS OF COLOMBIA

  2.- [MODULE EXPORTS]

*/

const Model = require('../../../storage/models/post')
const userModel = require('../../../storage/models/user')

//------------------------------------------------------------------------------------------------
// 1.1.1 [getLocation] - SEARCH POSTS LOCATIONS
//------------------------------------------------------------------------------------------------

const getLocation = async (location) => {
  return new Promise((resolve, reject) => {

  Model.find({location: location}).limit(10)
  .populate('user')
  .populate('tags')
  .exec((error, data) => {
    if (error) {
      reject(error)
    }
    resolve(data)
  })
})

}

//------------------------------------------------------------------------------------------------
// 2.2.2 [getLocationTop] - SHOW POSTS LOCATIONS TOP 2 POST OF MEXICO AND 2 POSTS OF COLOMBIA
//------------------------------------------------------------------------------------------------

  const getLocationTop = async () => {
    //const colombia = await Model.find({ location: {$exists:true}, country: "colombia", image: {$exists:true}}, {location:1, country:1, image:1}).limit(2)

    const mexico1 = await Model.findOne({ _id: "5f97d475788d9c3cb4e73bc9" }, {location:1, country:1, image:1})
    const mexico2 = await Model.findOne({ _id: "5f97d38f788d9c3cb4e73bc8" }, {location:1, country:1, image:1})
    const colombia1 = await Model.findOne({ _id: "5f97d20f788d9c3cb4e73bc6" }, {location:1, country:1, image:1})
    const colombia2 = await Model.findOne({ _id: "5f97d2dd788d9c3cb4e73bc7" }, {location:1, country:1, image:1})

    return  {
      mexico1,
      mexico2,
      colombia1,
      colombia2
    }
  }

//------------------------------------------------------------------------------------------------
// [MODULE EXPORTS]
//------------------------------------------------------------------------------------------------

module.exports = {
  getLocation,
  getLocationTop
}