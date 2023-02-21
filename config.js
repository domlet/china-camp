var config = {
    style: 'mapbox://styles/domlet/clea7ps9w000501pbsk3ysj0s',
    accessToken: 'pk.eyJ1IjoiZG9tbGV0IiwiYSI6ImNsZWE3ZDhydzBmeTQzb3BhNGVydDA5a2UifQ.SNDKxIemeuOaHQtoxLbLGA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Day 1: Meet at CCPA',
            image: 'images/ccpa-campus.jpg',
            description: 'On Monday May 15th, we\'ll meet on campus to prepare for the trip! We will review the day-by-day itinerary, answer questions, and discuss safety precautions and expectations for the trip.',
            location: {
                center: [-122.1936938593969,37.76174946214697],
                zoom: 12.45,
                pitch: 57,
                bearing: -64.8,
                speed: .2, // make the flying slow
                curve: 2, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ccpa-to-ccsp',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'directions-from-camp-to-beach',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Arrive at China Camp State Park',
            image: 'images/china-camp-tents.jpeg',
            description: 'We will arrive at the park, unload our gear, and set up camp.',
            location: {
                center: [-122.494449,38.006327],
                zoom: 13,
                pitch: 57,
                bearing: -64.8,
                minZoom: 10,
                speed: .5, // make the flying slow
                curve: 2, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ccpa-to-ccsp',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'directions-from-camp-to-beach',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Hike the Shoreline Trail (4 miles)',
            description: 'The Shoreline Trail runs from Back Ranch Meadows Campground along the shore to China Camp Beach. We\'ll pass the Turtle Back Nature Trail and the Miwok Meadows coastal marshland and its waterfowl and wildlife. <a href="https://www.protrails.com/trail/771/san-francisco-marin-headlands-mt-tamalpais-point-reyes-shoreline-trail">Learn more.</a>',
            location: {
                center: [-122.4804,38.00232],
                zoom: 14,
                pitch: 8.01,
                bearing: -167.2,
                speed: 1, // make the flying slow
                curve: .5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'directions-from-camp-to-beach',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'China Camp Beach & Museum',
            image: 'images/china-camp-beach.jpg',
            description: 'A relaxed beach to swim, picnic, and play games. Bring games (like UNO or Scrabble), a bluetooth speaker for music, beach towels or blankets, and sandals or water shoes.<br><br>Learn: <a href="https://www.youtube.com/watch?v=dIpra_FO8ho">Frank Quan\'s family</a> has lived at China Camp catching and selling shrimp since the 1890s.',
            location: {
                center: [-122.461155,38.001267],
                zoom: 17.66,
                pitch: -148.4,
                bearing: -167.2,
                speed: 1, // make the flying slow
                curve: .5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Campfire Cooking',
            image: 'images/campfire-cooking-cast-iron.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.49444,38.00576],
                zoom: 17.04,
                pitch: 75,
                bearing: -157.6,
                speed: 1, // make the flying slow
                curve: .5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Catch the Ferry in Larkspur',
            image: 'images/Larkspur-Ferry-Terminal-bigwavebill.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.508341,37.944346],
                zoom: 12,
                pitch: -63.2,
                bearing: -160,
                speed: .5, // make the flying slow
                minZoom: 12,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Offboard Ferry in San Francisco',
            image: 'images/golden-gate-ferry-sf.webp',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.39252,37.79566],
                zoom: 11,
                pitch: -63.2,
                bearing: -160,
                speed: .2, // make the flying slow
                minZoom: 10,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Walk to  Dragon Gate Chinatown Entrance',
            image: 'images/dragon-gate-flickr-mbell1975-16600105831.jpg',
            description: 'Photo: ',
            location: {
                center: [-122.4056,37.79068],
                zoom: 13,
                pitch: -63.2,
                bearing: -160,
                speed: .5, // make the flying slow
                minZoom: 14,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Return to SF Ferry Terminal',
            image: 'images/golden-gate-ferry-sf.webp',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.39252,37.79566],
                zoom: 16,
                pitch: -63.2,
                bearing: -160,
                speed: .5, // make the flying slow
                minZoom: 14,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Return to Larkspur Ferry Terminal',
            image: 'images/Larkspur-Ferry-Terminal-bigwavebill.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.508341,37.944346],
                zoom: 16,
                pitch: -63.2,
                bearing: -160,
                speed: .5, // make the flying slow
                minZoom: 14,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



    ]
};
