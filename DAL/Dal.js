'use strict'

const config = require('./Config.js')
const jsonfile = require('jsonfile')
const Hotel = require('../Models/Hotel.js')
const path = require("path");
var fs = require('fs');

const getHotels = () => {
  return new Promise(function(resolve, reject){
    switch(config.dbtype){
      case 'JSON':{
        jsonfile.readFile(config.dbsource, function(err, obj){
          let hotels = []
          if(err != null && err != undefined)
          {
            reject(Error(err))
          }
          else
          {
            hotels = obj.map( function (o) {


                  try {
                  fs.accessSync(path.resolve(__dirname, '../public/hotels/' + o.image), fs.F_OK);
                      return new Hotel(o.id, o.name, o.stars, o.price, 'https://almundoapi.azurewebsites.net/static/hotels/' + o.image, o.amenities)
                  } catch (e) {
                     return new Hotel(o.id, o.name, o.stars, o.price, '', o.amenities)
                  }

            })

            resolve(hotels)

          }
        })
        break;
      }
    }
  })
}

const getAmenities = () => {
  return [
           {
              name: 'safety-box',
              img: 'logo.jpg'
           },
           {
              name: 'nightclub',
              img: 'logo.jpg'
           },
           {
              name: 'deep-soaking-bathtub',
              img: 'logo.jpg'
           },
           {
              name: 'beach',
              img: 'logo.jpg'
           },
           {
              name: 'business-center',
              img: 'logo.jpg'
           },
           {
              name: 'bathtub',
              img: 'logo.jpg'
           },
           {
              name: 'newspaper',
              img: 'logo.jpg'
           },
           {
              name: 'restaurant',
              img: 'logo.jpg'
           },
           {
              name: 'fitness-center',
              img: 'logo.jpg'
           },
           {
              name: 'garden',
              img: 'logo.jpg'
           },
           {
              name: 'bathrobes',
              img: 'logo.jpg'
           },
           {
              name: 'beach-pool-facilities',
              img: 'logo.jpg'
           }
         ]
}

module.exports = {
  getHotels,
  getAmenities
}
