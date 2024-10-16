using A2.Dtos;
using A2.Models;

namespace A2.Data
{
    public interface IA2Repo
    {
        User AddUser(User user);
        User? GetUserByUserName(string UserName);

        Sign? GetSignByID(string Id);
        Event AddEvent(Event E);
        IEnumerable<Event> GetAllEvents();
        Event? GetEventByID(int Id);
        bool ValidUser(string UserName, string Password);
        bool ValidOrganizer(string Name, string Password);
    }
}
