let node1 = {
    "name": "BODY",
    "nodeType": 1,
    "children": [{
        "name": "#text",
        "nodeType": 3,
        "content": "\n"
      }, {
        "name": "P",
              "content": "class='premier'",
        "nodeType": 1,
        "children": [{
          "name": "#text",
          "nodeType": 3,
          "content": "Para 1"
        }]
      },
  
      {
        "name": "#text",
        "nodeType": 3,
        "content": "\n"
      }, {
        "name": "P",
        "nodeType": 1,
        "children": [{
          "name": "em",
          "nodeType": 1,
           "children": [{
          "name": "#text",
          "nodeType": 3,
          "content": "second"
        }]
        }, {
          "name": "#text",
          "nodeType": 3,
          "content": " Para 2"
        }]
      }, {
        "name": "#text",
        "nodeType": 3,
        "content": "\n"
      }, {
        "name": "P",
        "nodeType": 1,
        "children": [{
          "name": "#text",
          "nodeType": 3,
          "content": "dernier Para"
        }],"content" : "id='dernier'",
      }, {
        "name": "#text",
        "nodeType": 3,
        "content": "\n"
      }, {
        "name": "#comment",
        "nodeType": 8,
        "content": "Je suis un commentaire"
      }, {
        "name": "#text",
        "nodeType": 3,
        "content": "\n"
      },
    ]
  
  }
  
  drawHtmlTree(node1, 'div.domtree', 1000, 820);