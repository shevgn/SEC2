namespace task2;

public class Aircraft
{
    public string Name { get; }
    private ICommandMediator _mediator;

    public Aircraft(string name, ICommandMediator mediator)
    {
        Name = name;
        _mediator = mediator;
    }

    public void Land(Guid runwayId)
    {
        Console.WriteLine($"Aircraft {Name} requesting landing."); 
        _mediator.RequestLanding(Name, runwayId); 
    }

    public void TakeOff()
    {
        Console.WriteLine($"Aircraft {Name} requesting takeoff.");
        _mediator.RequestTakeoff(Name);
    }
}
