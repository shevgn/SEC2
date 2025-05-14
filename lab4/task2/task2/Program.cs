using task2;


var runways = new List<Runway>();
var aircrafts = new List<Aircraft>();

CommandCentre centre = new CommandCentre(runways, aircrafts);

var runway1 = new Runway(centre);
var ac1     = new Aircraft("AC-1", centre);
var boeing = new Aircraft("boeing747", centre);

runways.Add(runway1);
aircrafts.Add(ac1);
aircrafts.Add(boeing);

ac1.Land(runway1.Id);
ac1.TakeOff();

boeing.Land(runway1.Id);
boeing.TakeOff();

