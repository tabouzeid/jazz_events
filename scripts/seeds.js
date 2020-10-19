//make sure Date is only MM/DD/YYYY not time
//startTime should be DateTime HH:MM

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Event = require("../model/Event.js");
const User = require("../model/User.js");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eventkeeper"
);

const eventSeeds = [
    {
        "date": new Date(Date.now() + 13),
        "venueName": "Open Source Gallery",
        "address": "306 17th St, Brooklyn, NY 11215",
        "eventName": "Rosenbloom/Filiano/Anderson",
        "cover": 10,
        "sets": [
            {
                "startTime": "5pm",
                "artistList": "Mara Rosenbloom, Ken Filiano, Vijay Anderson"
            }
        ]
    },
    {
        "date": new Date(Date.now() + 86400000),
        "venueName": "Red Hook Ferry Terminal",
        "address": "Ferris Street and Clinton Wharf, Brooklyn, NY 11231",
        "eventName": "Pitsiokos/Stewart/Holmes",
        "cover": 0,
        "sets": [
            {
                "startTime": "7pm",
                "artistList": "Chris Pitsiokos, Luke Stewart, Tcheser Holmes"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 2)),
        "venueName": "Branded Saloon",
        "address": "603 Vanderbilt Ave, Brooklyn, NY 11238",
        "eventName": "Off-Brand Music Series: Leonor Falcon's Mondo Imaga",
        "cover": 20,
        "sets": [
            {
                "startTime": "8pm",
                "artistList": "Leonor Falcon, Juanma Trujillo, Christof Knoche, Juan Pablo Carletti"
            },
            {
                "startTime": "9:30pm",
                "artistList": "Keisuke Matsuno, Adam O'Farrill, Christian Li, Dayeon Soek"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 3)),
        "venueName": "Prospect Park",
        "address": "Brooklyn, NY",
        "eventName": "Jake Henry's Boneyard",
        "cover": 0,
        "sets": [
            {
                "startTime": "8pm",
                "artistList": "Jake Henry, Caroline Davis, Nathaniel Morgan, Angela Morris"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 4)),
        "venueName": "Prospect Park",
        "address": "Brooklyn, NY",
        "eventName": "No Land/Mattrey/Parker/Carter/Williams",
        "cover": 0,
        "sets": [
            {
                "startTime": "4pm",
                "artistList": "No Land, Joanna Mattrey"
            },
            {
                "startTime": "5:30pm",
                "artistList": "No Land, Miriam Parker, Chris Williams, Daniel Carter, Joanna Mattrey"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 5)),
        "venueName": "IBeam",
        "address": "168 7th St, Brooklyn, NY 11215",
        "eventName": "Victor/Harnik/Dessen",
        "cover": 20,
        "sets": [
            {
                "startTime": "9pm",
                "artistList": "Fay Victor, Elisabeth Harnik, Michael Dessen"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 6)),
        "venueName": "Spectrum",
        "address": "70 Flushing Ave, Brooklyn, NY 11205",
        "eventName": "Sun Speak",
        "cover": 15,
        "sets": [
            {
                "startTime": "7pm",
                "artistList": "Matt Gold, Nate Friedman"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 7)),
        "venueName": "Michiko Studios",
        "address": "149 W 46th St floor 3, New York, NY 10036",
        "eventName": "Richard Tabnik Quartet",
        "cover": 20,
        "sets": [
            {
                "startTime": "4pm",
                "artistList": "Richard Tabnik, Harvey Diamond, Jeff Dingler, Skip Scott"
            }
        ]
    },
    {
        "date": new Date(Date.now() + (86400000 * 8)),
        "venueName": "The Stone",
        "address": "55 W 13th St, New York, NY 10011",
        "eventName": "Herbie Nichols 100th Birthday Celebration",
        "cover": 20,
        "sets": [
            {
                "startTime": "8pm",
                "artistList": "Mike Kimbrough, Ron Horton, Michael Blake, Ben Allison, Mike Sarin"
            },
            {
                "startTime": "9pm",
                "artistList": "Fay Victor, Anthony Coleman, Michael Attias, Ratzo Harris, Tom Rainey"
            },
            {
                "startTime": "10pm",
                "artistList": "Vijay Iyer, Anthony Coleman, Aruan Ortiz"
            },
            {
                "startTime": "11pm",
                "artistList": "Steven Bernstein, Steve Swell, Deborah Weisz, Art Baron, Josh Roseman, Bob Stewart"
            }
        ]
    }
];

const userSeed = [{
    "email": "admin@gmail.com",
    "password": "password",
    "name": "Charnett Brown",
    "role": "admin",
    "favorites": [{
      "date": new Date(Date.now() + (86400000 * 7)),
      "venueName": "Michiko Studios",
      "address": "149 W 46th St floor 3, New York, NY 10036",
      "eventName": "Richard Tabnik Quartet",
      "cover": 20,
      "sets": [
          {
              "startTime": "4pm",
              "artistList": "Richard Tabnik, Harvey Diamond, Jeff Dingler, Skip Scott"
          }
      ]
  }]
}];

Event
  .remove({})
  .then(() => Event.collection.insertMany(eventSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    User
        .remove({})
        .then(() => {
            bcrypt.hash(userSeed[0].password, 10)
            .then(hashedPassword => {
                userSeed[0].password = hashedPassword;
                User.create(userSeed[0])
                .then(() => {
                    console.log(data + " records inserted!");
                    process.exit(0);
                })
                .catch(err => {
                    console.log(err);
                    process.exit(1);
                })
            }
            )
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
  })
  .catch(err => {
    console.error(err);
  });

  


