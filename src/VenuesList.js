import React, { Component } from 'react';

class VenuesList extends Component {
    render() {
        const mySights = [
          { name: "White Tower", address: "White Tower Square", location: {"lat": 40.626450528116514, "lng": 22.94831943690908}, id: "4bd9a4d1d2cbc928b330d1ad"},
          { name: "Vassiliko Theatre", address: "2, Megalou Alexandrou street", location: {"lat": 40.62546853426347, "lng": 22.9494665664597}, id: "4bebade662c0c928f86fe2d4"},
          { name: "White Tower Square", address: "White Tower Square", location: {"lat": 40.62656254010239, "lng": 22.94831361908057}, id: "4e7b2af82271813db090af4e"},
          { name: "Statue of Alexander the Great", address: "2, Megalou Alexandrou street", location: {"lat": 40.624347840710115, "lng": 22.95037894569014}, id: "4d8736cb7e8ef04d117542be"},
          { name: "Umbrellas", address: "2, Megalou Alexandrou street", location: {"lat": 40.62191967047792, "lng": 22.95156714233805}, id: "4dbe65d10437955ec063e65b"}
        ];
    
        return (
          <div id="Venues" aria-label="Venues List">
            <ol id="Venues-List" aria-label="Sights">
              {mySights.map(mySight => (
                <li tabIndex="0" id={mySight.id} key={mySight.id}>
                    <b>{mySight.name}</b><br></br> <i>{mySight.address}</i>
                </li>
              ))}
            </ol>
            <p>Data provided by Foursquare (Places API)</p>
          </div>
        );
      }
}

export default VenuesList;