import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import moment from "moment";

function App() {
  const [inpunch, setinpunch] = useState();
  const [outpunch, setoutpunch] = useState();
  const [duration, setDuration] = useState("");

  const date = moment().format("MMMM Do YYYY, h:mm:ss a"); // November 4th 2023, 8:29:35 am

  const Punchin = () => {
    setinpunch(date);
    console.log(inpunch);
  };

  const Punchout = () => {
    setoutpunch(date);
    console.log(outpunch);
  };

  const timeCalc = (inpunch, outpunch) => {
    if (inpunch && outpunch) {
      var start = moment(inpunch, "MMMM Do YYYY, h:mm:ss a");
      var end = moment(outpunch, "MMMM Do YYYY, h:mm:ss a");
      var difference = end.diff(start);
      var duration = moment.duration(difference);
      var hours = duration.hours();
      var minutes = duration.minutes();
      var seconds = duration.seconds();
      const workingTime = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      setDuration(workingTime);
      console.log(workingTime);
    } else {
      console.log("inpunch and outpunch are not set.");
    }
  };

  return (
    <>
      <Card
        style={{
          height: 70,
          marginTop: 150,
          marginLeft: 550,
          marginRight: 550,
        }}
      >
        <Card.Body style={{ backgroundColor: "skyblue" }}>
          <Card.Text style={{ textAlign: "center" }}>
            <b>Attandance App 🏢</b>
          </Card.Text>
        </Card.Body>
      </Card>
      <CardGroup style={{ marginTop: 10, marginLeft: 550, marginRight: 550 }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>You are Logged in</Card.Title>
            <Card.Text>{inpunch}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary" onClick={() => Punchin()}>
                Puch in
              </Button>
            </Stack>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>You are Logged out </Card.Title>
            <Card.Text>{outpunch}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary" onClick={() => Punchout()}>
                Punch Out
              </Button>
            </Stack>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Card style={{ height: 100, marginLeft: 550, marginRight: 550 }}>
        <Card.Body>
          <Card.Text>Working time : {duration}</Card.Text>
        </Card.Body>
        <Button variant="secondary" onClick={() => timeCalc(inpunch, outpunch)}>
          Working time
        </Button>
      </Card>
    </>
  );
}

export default App;