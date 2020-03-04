const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsListByDistance = async (req, res) => { 
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    console.log(req.query);
    if(!lng || !lat) {
        res
            .status(404)
            .json({"message": "lat, lng are required"})
    }
    
    const near = {
        type: "Point",
        coordinates: [lng, lat]
    };
    
    const geoOptions = {
       distanceField:"distance.calculated",
        key: "coords",
        spherical: true,
        maxDistance: 20000,
        limit: 10
    };
    
    try {
       const result = await Loc.aggregate([
           {
               $geoNear: {
                   near,
                   ...geoOptions
               }
           }
       ]); 
       const locations = result.map(result => {
         return {
             id: result._id,
             name: result.name,
             address: result.address,
             rating: result.rating,
             facilities: result.facilities,
             distance: `${result.distance.calculated.toFixed()}m`
         }; 
       });
       res
           .status(200)
           .json(locations);
    } catch (err) {
        res
            .status(404)
            .json({"message: ": err.toString()});
    }
};
const locationsCreate = (req, res) => {
    const location = {
        name : req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(','),
        coords: {
            type: "Point",
            coordinates: [
                parseFloat(req.body.lng),
                parseFloat(req.body.lat)
            ]
        },
        openingTimes:[
            {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2,
            }
        ]
    }
    
    Loc.create(location, (err, location) => {
        if(err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(location);
            
        }
    });
};

const locationsReadOne = (req, res) => {
    //return res.status(200).json({"message": "ok"});
    
    Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
            if(!location) {
                return res
                        .status(404)
                        .json({"message": "location not found"})
            } else if (err) {
                return res
                        .status(404)
                        .json(err)
            } 
            
            res
                .status(200)
                .json(location);
            
        });
};

const locationsUpdateOne = (req, res) => {
    const locationId = req.params.locationid;
    if(!locationId) {
        res
            .status(404)
            .json({message: "locationid is required"});
    }
    
    Loc
        .findById(locationId)
        .select('-rating -reviews')
        .exec((err, location) => {
            if(!location) {
                res
                    .status(404)
                    .json({message: "Location not found"});
            } else if(err) {
                res
                    .status(400)
                    .json({message: err.toString()})
            }
            
            location.name = req.body.name;
            location.address = req.body.address;
            location.facilities = req.body.facilities.split(',');
            location.coords = {
                type: "Point",
                coordinates: [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
            };
            location.openingTimes = [{
                days: req.body.days1,
                opening: req.body.opening1,
                closing: req.body.closing1,
                closed: req.body.closed1,
            }, {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2,
            }];

            location.save((err, location) => {
                if(err) {
                    res
                        .status(400)
                        .json({message: err.toString()})
                } else {
                    res
                        .status(200)
                        .json(location);
                }
                
            });
        })
};

const locationsDeleteOne = (req, res) => {
    const locationId = req.params.locationid;
    if(!locationId) {
        res
            .status(404)
            .json({message: "locationid is required"});
    } else {
        Loc
            .findByIdAndRemove(locationId)
            .exec((err, location) => {
              if(err) {
                  res
                      .status(404)
                      .json({message: err.toString()});
              } else {
                  res
                      .status(204)
                      .json(null);
              } 
            });
    }
};


const test = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .select("name reviews")
        .exec((err, locations) => {
            const reviews = locations.reviews.id(req.params.reviewid)
            res
                .status(200)
                .json(locations);
        });
};

module.exports = {
    test,
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};