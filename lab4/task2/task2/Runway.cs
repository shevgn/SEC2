namespace task2;

public class Runway
{
    public Guid Id { get; } = Guid.NewGuid();
    public bool IsOccupied { get; set; }
    
    private ICommandMediator _mediator;

    public Runway(ICommandMediator mediator)
    {
        _mediator = mediator;
    }
    
    public void AssignLanding(string aircraftName)
    {
        if (!IsOccupied)
        {
            Console.WriteLine($"Runway {Id}: {aircraftName} landing now.");
            IsOccupied = true;
        }
        else
        {
            Console.WriteLine($"Runway {Id} is busy. Cannot land {aircraftName}.");
        }
    }

    public void AssignTakeoff(string aircraftName)
    {
        if (IsOccupied)
        {
            Console.WriteLine($"Runway {Id}: {aircraftName} taking off now.");
            IsOccupied = false;
        }
        else
        {
            Console.WriteLine($"Runway {Id} is free. No takeoff for {aircraftName}.");
        }
    }
}
