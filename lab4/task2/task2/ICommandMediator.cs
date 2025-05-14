namespace task2;

public interface ICommandMediator
{
    void RequestLanding(string aircraftName, Guid runwayId);
    void RequestTakeoff(string aircraftName);
}
