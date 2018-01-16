'use strict'

module.exports = class Hotel {
  constructor(id, name, stars, price, image, amenities) {
    this.id = id
    this.name = name
    this.stars = stars
    this.price = price
    this.image = image
    this.amenities = amenities
  }
}
