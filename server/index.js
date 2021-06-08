import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Console } from 'console';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(7777, () => console.log("Server address http://localhost:7777"));

//GET methods
app.get('/games', (_req, res) => {
    fs.readFile('./games.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /games: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /games");
        res.send(productsJson);
    });
});

app.get('/publisher', (_req, res) => {
    fs.readFile('./publisher.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /publisher: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /publisher");
        res.send(productsJson);
    });
});

app.get('/distribution', (_req, res) => {
    fs.readFile('./distribution.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /distribution: " + err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /distribution");
        res.send(productsJson);
    });
});

//Delete methods 
//Game
app.delete("/games/:id", (req, res) => {
    fs.readFile("./games.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in DELETE /games: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      console.log(data);
      var idx = data.findIndex(
        (m) => m.id == req.params.id
      );

      if (idx != -1) {
        data.splice(idx, 1);
        var newList = JSON.stringify(data);
        fs.writeFile("./games.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in DELETE /games/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file games.json");
          } else {
            res.status(204).send();
            console.log("Successfully deleted game with id = " + req.params.id);
          }
        });
      } else {
        console.log("Game by id = " + req.params.id + " does not exists");
        res
          .status(500)
          .send("Game by id = " + req.params.id + " does not exists");
        return;
      }
    });
  });

  //Publisher
  app.delete("/publisher/:id", (req, res) => {
    fs.readFile("./publisher.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in DELETE /publisher: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      console.log(data);
      var idx = data.findIndex(
        (m) => m.id == req.params.id
      );

      if (idx != -1) {
        data.splice(idx, 1);
        var newList = JSON.stringify(data);
        fs.writeFile("./publisher.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in DELETE /publisher/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file publisher.json");
          } else {
            res.status(204).send();
            console.log("Successfully publisher game with id = " + req.params.id);
          }
        });
      } else {
        console.log("publisher by id = " + req.params.id + " does not exists");
        res
          .status(500)
          .send("publisher by id = " + req.params.id + " does not exists");
        return;
      }
    });
  });

  //Distribution
  app.delete("/distribution/:id", (req, res) => {
    fs.readFile("./distribution.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in DELETE /distribution: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      console.log(data);
      var idx = data.findIndex(
        (m) => m.id == req.params.id
      );

      if (idx != -1) {
        data.splice(idx, 1);
        var newList = JSON.stringify(data);
        fs.writeFile("./distribution.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in DELETE /distribution/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file distribution.json");
          } else {
            res.status(204).send();
            console.log("Successfully distribution game with id = " + req.params.id);
          }
        });
      } else {
        console.log("distribution by id = " + req.params.id + " does not exists");
        res
          .status(500)
          .send("distribution by id = " + req.params.id + " does not exists");
        return;
      }
    });
  });


  //Edit methods
  //Game
  app.put("/games/:id", (req, res) => {
    fs.readFile("./games.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log(
          "File read failed in PUT /games/" + req.params.id + ": " + err
        );
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var gameBody = data.find((g) => g.id == req.body.id);
  
      if (gameBody && gameBody.id != req.params.id) {
        console.log("Game by id = " + gameBody.id + " already exists");
        res
          .status(500)
          .send("Game by id = " + gameBody.id + " already exists");
        return;
      }
      var games = data.find((m) => m.id == req.params.id);
      if (!games) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./games.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /games/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file games.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file games.json and added new game with id = " +
                req.body.id
            );
          }
        });
      } else {
        var idx = data.findIndex((m) => m.id == req.params.id);
        data[idx] = req.body;
        var newList = JSON.stringify(data);
        fs.writeFile("./games.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /games/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file games.json");
          } else {
            res.status(200).send(req.body);
            console.log(
              "Successfully wrote file games.json and edit game with old id = " +
                req.params.id
            );
          }
        });
      }
    });
  });

//Distribution
  app.put("/distribution/:id", (req, res) => {
    fs.readFile("./distribution.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log(
          "File read failed in PUT /distribution/" + req.params.id + ": " + err
        );
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var distribution = data.find((g) => g.id == req.body.id);
  
      if (distribution && distribution.id != req.params.id) {
        console.log("distribution by id = " + distribution.id + " already exists");
        res
          .status(500)
          .send("distribution by id = " + distribution.id + " already exists");
        return;
      }
      var distributions = data.find((m) => m.id == req.params.id);
      if (!distributions) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./distribution.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /distribution/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file distribution.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file distribution.json and added new game with id = " +
                req.body.id
            );
          }
        });
      } else {
        var idx = data.findIndex((m) => m.id == req.params.id);
        data[idx] = req.body;
        var newList = JSON.stringify(data);
        fs.writeFile("./distribution.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /distribution/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file distribution.json");
          } else {
            res.status(200).send(req.body);
            console.log(
              "Successfully wrote file distribution.json and edit distribution with old id = " +
                req.params.id
            );
          }
        });
      }
    });
  });

  //Publisher
  app.put("/publisher/:id", (req, res) => {
    fs.readFile("./publisher.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log(
          "File read failed in PUT /publisher/" + req.params.id + ": " + err
        );
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var publisherBody = data.find((g) => g.id == req.body.id);
  
      if (publisherBody && publisherBody.id != req.params.id) {
        console.log("publisher by id = " + publisherBody.id + " already exists");
        res
          .status(500)
          .send("publisher by id = " + publisherBody.id + " already exists");
        return;
      }
      var publisher = data.find((m) => m.id == req.params.id);
      if (!publisher) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./publisher.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /publisher/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file publisher.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file publisher.json and added new publisher with id = " +
                req.body.id
            );
          }
        });
      } else {
        var idx = data.findIndex((m) => m.id == req.params.id);
        data[idx] = req.body;
        var newList = JSON.stringify(data);
        fs.writeFile("./publisher.json", newList, (err) => {
          if (err) {
            console.log(
              "Error writing file in PUT /publisher/" + req.params.id + ": " + err
            );
            res.status(500).send("Error writing file publisher.json");
          } else {
            res.status(200).send(req.body);
            console.log(
              "Successfully wrote file publisher.json and edit publisher with old id = " +
                req.params.id
            );
          }
        });
      }
    });
  });


  //POST methods
  app.post("/games", (req, res) => {
    fs.readFile("./games.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in POST /games: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var game = data.find((m) => m.id == req.body.id);
      if (!game) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./games.json", newList, (err) => {
          if (err) {
            console.log("Error writing file in POST /games: " + err);
            res.status(500).send("Error writing file game.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file games.json and added new game with id = " +
                req.body.id
            );
          }
        });
      } else {
        console.log("game by id = " + req.body.id + " already exists");
        res
          .status(500)
          .send("game by id = " + req.body.id + " already exists");
        return;
      }
    });
  });

  //Publisher 
  
  app.post("/publisher", (req, res) => {
    fs.readFile("./publisher.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in POST /publisher: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var publisher = data.find((m) => m.id == req.body.id);
      if (!publisher) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./publisher.json", newList, (err) => {
          if (err) {
            console.log("Error writing file in POST /publisher: " + err);
            res.status(500).send("Error writing file publisher.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file publisher.json and added new game with id = " +
                req.body.id
            );
          }
        });
      } else {
        console.log("publisher by id = " + req.body.id + " already exists");
        res
          .status(500)
          .send("publisher by id = " + req.body.id + " already exists");
        return;
      }
    });
  });

  //Distribution
  app.post("/distribution", (req, res) => {
    fs.readFile("./distribution.json", "utf8", (err, dataJson) => {
      if (err) {
        console.log("File read failed in POST /distribution: " + err);
        res.status(500).send("File read failed");
        return;
      }
      var data = JSON.parse(dataJson);
      var distribution = data.find((m) => m.id == req.body.id);
      if (!distribution) {
        data.push(req.body);
        var newList = JSON.stringify(data);
        fs.writeFile("./distribution.json", newList, (err) => {
          if (err) {
            console.log("Error writing file in POST /distribution: " + err);
            res.status(500).send("Error writing file distribution.json");
          } else {
            res.status(201).send(req.body);
            console.log(
              "Successfully wrote file distribution.json and added new game with id = " +
                req.body.id
            );
          }
        });
      } else {
        console.log("distribution by id = " + req.body.id + " already exists");
        res
          .status(500)
          .send("distribution by id = " + req.body.id + " already exists");
        return;
      }
    });
  });

