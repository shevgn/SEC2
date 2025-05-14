namespace task2;

public class CommandCentre : ICommandMediator
{
    private readonly List<Runway> _runways;
    private readonly List<Aircraft> _aircrafts;

    public CommandCentre(List<Runway> runways, List<Aircraft> aircrafts)
    {
        _runways   = runways;
        _aircrafts = aircrafts;
    }

    public void RequestLanding(string aircraftName, Guid runwayId)
    {
        var runway = _runways.FirstOrDefault(r => r.Id == runwayId);
        if (runway is null)
        {
            Console.WriteLine($"CommandCentre: runway {runwayId} not found.");
            return;
        }
        runway.AssignLanding(aircraftName);
    }

    public void RequestTakeoff(string aircraftName)
    {
        var runway = _runways.FirstOrDefault(r =>
            r.IsOccupied && _aircrafts.Any(ac => ac.Name == aircraftName));
        if (runway is null)
        {
            Console.WriteLine($"CommandCentre: no occupied runway for {aircraftName}.");
            return;
        }
        runway.AssignTakeoff(aircraftName);
    }
}