using A2.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace A2.Data
{
    public class A2Repo : IA2Repo
    {
        private readonly A2DbContext _dbContext;

        public A2Repo(A2DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Event AddEvent(Event newEvent)
        {
            EntityEntry<Event> e = _dbContext.Events.Add(newEvent);
            Event Event = e.Entity;
            _dbContext.SaveChanges();
            return Event;
        }

        public User AddUser(User user)
        {
            EntityEntry<User> e = _dbContext.Users.Add(user);
            User u = e.Entity;
            _dbContext.SaveChanges();
            return u;
        }

        public IEnumerable<Event> GetAllEvents()
        {
            IEnumerable<Event> events = _dbContext.Events.ToList<Event>();
            return events;
        }

        public Event? GetEventByID(int id)
        {
            Event? Event = _dbContext.Events.FirstOrDefault(e => e.Id == id);
            return Event;
        }

        public Sign? GetSignByID(string id)
        {
            Sign? sign = _dbContext.Signs.FirstOrDefault(p => p.Id == id);
            return sign;
        }

        public User? GetUserByUserName(string UserName)
        {
            User? user = _dbContext.Users.FirstOrDefault(u => u.UserName == UserName);
            return user;
        }

        public bool ValidUser(string UserName, string Password)
        {
            User? u = _dbContext.Users.FirstOrDefault(p => p.UserName == UserName && p.Password == Password);
            if (u == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool ValidOrganizer(string Name, string Password)
        {
            Organizer? o = _dbContext.Organizers.FirstOrDefault(o => o.Name == Name && o.Password == Password);
            if (o == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
