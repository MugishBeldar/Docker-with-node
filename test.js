const arr = [
  {
    "key": "projects/066acddb8ad77a1e8000f94373327377",
    "label": "AI/ML",
    "children": [
      {
        "key": "sources",
        "label": "Sources"
      },
      {
        "key": "EDR/sources",
        "label": "EDR"
      },
      {
        "key": "models",
        "label": "Models"
      },
      {
        "key": "insights/overview",
        "label": "Insights"
      },
      {
        "key": "entities",
        "label": "Entities"
      },
      {
        "key": "inspectors",
        "label": "Inspector"
      },
      {
        "key": "settings1",
        "label": "Settings",
        "children": [
          {
            "key": "inspectors4",
            "label": "inspectors4"
          },
          {
            "key": "inspectors5",
            "label": "inspectors5"
          },
          {
            "key": "settings2",
            "label": "Settings",
            "children": [
              {
                "key": "inspectors7",
                "label": "inspectors7"
              },
              {
                "key": "settings3",
                "label": "Settings",
                "children": [
                  {
                    "key": "inspectors1",
                    "label": "Inspector"
                  }
                ],
                "icon": {
                  "type": "div",
                  "key": null,
                  "ref": null,
                  "props": {
                    "className": "ant-menu-submenu-arrows",
                    "children": {
                      "key": null,
                      "ref": null,
                      "props": {},
                      "_owner": null,
                      "_store": {}
                    }
                  },
                  "_owner": null,
                  "_store": {}
                }
              }
            ],
            "icon": {
              "type": "div",
              "key": null,
              "ref": null,
              "props": {
                "className": "ant-menu-submenu-arrows",
                "children": {
                  "key": null,
                  "ref": null,
                  "props": {},
                  "_owner": null,
                  "_store": {}
                }
              },
              "_owner": null,
              "_store": {}
            }
          }
        ],
        "icon": {
          "type": "div",
          "key": null,
          "ref": null,
          "props": {
            "className": "ant-menu-submenu-arrows",
            "children": {
              "key": null,
              "ref": null,
              "props": {},
              "_owner": null,
              "_store": {}
            }
          },
          "_owner": null,
          "_store": {}
        }
      }
    ],
    "icon": {
      "type": "div",
      "key": null,
      "ref": null,
      "props": {
        "className": "ant-menu-submenu-arrows",
        "children": {
          "key": null,
          "ref": null,
          "props": {},
          "_owner": null,
          "_store": {}
        }
      },
      "_owner": null,
      "_store": {}
    }
  }
]

const path = "http://localhost:3000/projects/066acddb8ad77a1e8000f94373327377/settings1/settings2/inspectors7";
const splittedPath = path.split('/');
// console.log(splittedPath);
const last = [splittedPath[splittedPath.length - 1], splittedPath[splittedPath.length - 2], splittedPath[splittedPath.length - 3]];
let prevChild;
for (let index = 0; index < arr.length; index++) {
  const obj = arr[index];
  const objKey = Object.keys(obj);
  // console.log('objKey:', objKey);
  if (objKey.includes('children')) {
    const keys = findChildByKey(arr[index]['children'], [])
    console.log('keys:', keys);
  }
}

function findChildByKey(children, keys) {
  for(let keyVal of last) {
    if(children.length) {
      for(let child of children) {
        if(Object.values(child).includes(keyVal)) {
          console.log('findChildByKey ~ Object.values(child).includes(keyVal):', Object.values(child).includes(keyVal))
          console.log('findChildByKey ~ prevChild.key:',  prevChild.key);
          if(!keys.includes(prevChild.key)) {
            keys.push(prevChild.key);
          }
          break;
        }
        if(Object.keys(child).includes('children')) {
          prevChild = child;
          findChildByKey(child['children'], keys);
        }
      }
    }
  }
  return keys;
}
