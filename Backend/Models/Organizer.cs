﻿using System.ComponentModel.DataAnnotations;

namespace A2.Models
{
    public class Organizer
    {
        [Key]
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
