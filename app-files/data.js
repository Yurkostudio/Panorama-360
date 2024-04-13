var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.008882079455020175,
          "pitch": 0.10178962609883158,
          "rotation": 0,
          "target": "1-kitchen-area"
        },
        {
          "yaw": -1.631911203163929,
          "pitch": 0.31118220929918294,
          "rotation": 0,
          "target": "2-dineng-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-area",
      "name": "Kitchen area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.048785169543927864,
          "pitch": 0.20863096123233404,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": 0.5319745126517965,
          "pitch": 0.17808500069328126,
          "rotation": 0,
          "target": "2-dineng-area"
        },
        {
          "yaw": 1.7282003841965201,
          "pitch": 0.32328111473595555,
          "rotation": 0,
          "target": "3-holl-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dineng-area",
      "name": "Dineng area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7437363039578777,
          "pitch": 0.3839443002583032,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": -2.69478742457985,
          "pitch": 0.150592588264562,
          "rotation": 0,
          "target": "1-kitchen-area"
        },
        {
          "yaw": 3.0308326579716702,
          "pitch": 0.2124087791238196,
          "rotation": 0,
          "target": "3-holl-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-holl-",
      "name": "holl ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0026780360747018506,
          "pitch": 0.16402540805023236,
          "rotation": 0,
          "target": "2-dineng-area"
        },
        {
          "yaw": -1.3041116418221925,
          "pitch": 0.31353018752329653,
          "rotation": 0,
          "target": "1-kitchen-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
